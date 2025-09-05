export function decodeHtmlEntities(text) {
  if (typeof text !== 'string') {
    throw new Error(`Failed to decode HTML entity: invalid type ${typeof text}`);
  }

  let decoded = text;

  const entities = {
    '&amp;': '\u0026',
    '&quot;': '\u0022',
    '&#039;': '\u0027',
  };

  return decoded.replace(/&amp;|&quot;|&#039;/g, (char) => entities[char]);
}

export function removeLastTrailingSlash(url) {
  if (typeof url !== 'string') return url;
  return url.replace(/\/$/, '');
}

export function removeExtraSpaces(text) {
  if (typeof text !== 'string') return;
  return text.replace(/\s+/g, ' ').trim();
}

/**
 * Remove sitewide types from a RankMath JSON-LD blob, keep page/post types,
 * and rewrite references to removed nodes so there are no dangling @id links.
 *
 * - Strips <script> tags if present
 * - Filters @graph by @type (supports string or array @type)
 * - If a kept node references a removed node via {"@id": "..."} or a string @id,
 *   it replaces it with the removed node's `url` (if available), or drops the field.
 */
export function sanitizeRankMathGraph(raw, {
  removeTypes = new Set(["Organization", "WebSite", "ImageObject", "BreadcrumbList"]),
} = {}) {
  if (!raw) return "";

  // 1) Remove any script wrappers and trim
  const clean = String(raw).replace(/<\/?script[^>]*>/gi, "").trim();

  let data;
  try {
    data = JSON.parse(clean);
  } catch (e) {
    console.error("Invalid JSON-LD from RankMath:", e);
    return "";
  }

  // Helper: does a node's @type intersect with the removal set?
  const hasBlockedType = (node) => {
    const t = node && node["@type"];
    if (!t) return false;
    if (Array.isArray(t)) return t.some((x) => removeTypes.has(x));
    return removeTypes.has(t);
  };

  // If this is a single object (not a graph)
  if (!Array.isArray(data?.["@graph"])) {
    // If the single object is one of the blocked types, drop it.
    if (hasBlockedType(data)) return "";
    // Otherwise just return it unchanged.
    return JSON.stringify(data);
  }

  const graph = data["@graph"];

  // 2) Build a map of nodes by @id so we can rewrite references later.
  const byId = new Map();
  for (const node of graph) {
    if (node?.["@id"]) byId.set(node["@id"], node);
  }

  // 3) Partition nodes into kept vs removed
  const kept = [];
  const removed = new Map(); // id -> node
  for (const node of graph) {
    if (hasBlockedType(node)) {
      if (node?.["@id"]) removed.set(node["@id"], node);
    } else {
      kept.push(node);
    }
  }

  // 4) Build a lookup from removed node @id => best replacement value
  //    For ImageObject and many others, `url` is the safest fallback.
  const replacementForId = new Map();
  for (const [id, node] of removed.entries()) {
    if (typeof node?.url === "string" && node.url) {
      replacementForId.set(id, node.url);
    } else if (typeof node?.contentUrl === "string" && node.contentUrl) {
      replacementForId.set(id, node.contentUrl);
    } else if (typeof node?.mainEntityOfPage === "string") {
      replacementForId.set(id, node.mainEntityOfPage);
    }
    // If we can't find a sensible URL, we'll drop the reference later.
  }

  // 5) Recursively rewrite/dereference any {"@id":"..."} or string "@id" fields in kept nodes
  const rewriteRefs = (value) => {
    if (Array.isArray(value)) {
      return value.map(rewriteRefs).filter((v) => v !== undefined);
    }
    if (value && typeof value === "object") {
      // If this object is just a reference like { "@id": "..." }
      if (Object.keys(value).length === 1 && typeof value["@id"] === "string") {
        const target = value["@id"];
        if (replacementForId.has(target)) return replacementForId.get(target);
        // If not replaceable, drop it by returning undefined
        return undefined;
      }
      // Otherwise, deep-walk
      const out = {};
      for (const [k, v] of Object.entries(value)) {
        // Some fields commonly contain @id references (image, logo, publisher, etc.)
        // but we just handle generically here:
        const rewritten = rewriteRefs(v);
        if (rewritten !== undefined) out[k] = rewritten;
      }
      return out;
    }
    // Plain string might equal an @id in some schemas (rare). Try replace if matches.
    if (typeof value === "string" && replacementForId.has(value)) {
      return replacementForId.get(value);
    }
    return value;
  };

  const rewrittenKept = kept.map(rewriteRefs);

  // 6) Remove any now-empty objects that lost all properties during rewrite
  const compact = (obj) => {
    if (Array.isArray(obj)) return obj.map(compact).filter((x) => x && (typeof x !== "object" || Object.keys(x).length));
    if (obj && typeof obj === "object") {
      const out = {};
      for (const [k, v] of Object.entries(obj)) {
        const c = compact(v);
        if (c !== undefined && (typeof c !== "object" || (Array.isArray(c) ? c.length : Object.keys(c).length))) {
          out[k] = c;
        }
      }
      return out;
    }
    return obj;
  };

  const finalGraph = compact(rewrittenKept);

  // 7) If the graph is empty, return empty string; else return the pruned JSON-LD
  if (!finalGraph || !Array.isArray(finalGraph) || finalGraph.length === 0) return "";

  return JSON.stringify({ "@context": data["@context"] || "https://schema.org", "@graph": finalGraph });
}


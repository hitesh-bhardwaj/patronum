import { QUERY_WEBSTORY_BY_SLUG } from "@/data/webstories";
import { getApolloClient } from "@/lib/apollo-client";
import { frontendUrl } from "@/utils/variables"; 

const cleanStoryContent = (content, slug, seoData) => {
  let cleanContent = "";

  cleanContent = content.replace(/\r?\n|\r/gs, "");

  cleanContent = cleanContent.replace(/<p>/gs, "");
  cleanContent = cleanContent.replace(/<\/p>/gs, "");

  cleanContent = cleanContent.replace(
    /<html.*?>/g,
    `<!DOCTYPE html>\n<html amp="" lang="en">`
  );

  cleanContent = cleanContent.replace(
    /rel="stylesheet"/g,
    'rel="preload" as="style"'
  );

  cleanContent = cleanContent.replace(
    /<amp-story-page/,
    `<amp-story-page
    `
  );

  const SeoData = seoData;

  cleanContent = cleanContent.replace(
    /<link rel="canonical".*?[>]/g,
    `<link rel="canonical" href="${frontendUrl}/web-stories/${slug}">
    <meta name="description" content="${SeoData?.description}">
    <meta property="og:locale" content='en_US'>
    <meta property="og:type" content='article'>
    <meta property="og:site_name" content='Patronum'>
    <meta property="twitter:card" content='summary_large_image'>
    <meta property="og:title" content="${SeoData?.title}">
    <meta property="og:description" content="${SeoData?.description}">
    <meta property="og:url" content="${frontendUrl}/web-stories/${slug}">`
  );

  return cleanContent;
};

const StoryPage = () => {
  return null; // Placeholder for the component
};

export const getServerSideProps = async (context) => {
  if (context && context.res) {
    const { res, params } = context;
    const slug = params?.slug;

    const apolloClient = getApolloClient();

    // fetch your web story here
    const { data } = await apolloClient.query({
      query: QUERY_WEBSTORY_BY_SLUG,
      variables: {
        id: slug,
        slug: slug,
      },
    });

    if (!data?.webStory?.content) {
      return {
        notFound: true,
      };
    }

    const seoData = data.webStory.seo;

    const cleanContent = cleanStoryContent(
      data?.webStory.content,
      slug,
      seoData
    );

    res.setHeader("content-type", "text/html");
    res.setHeader(
      "Cache-Control",
      "s-maxage=900, stale-while-revalidate=900"
    );
    res.write(cleanContent);
    res.end();
  }

  return {
    props: {},
  };
};

export default StoryPage;

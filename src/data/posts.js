import { gql } from '@apollo/client';

export const POST_FIELDS = gql`
  fragment PostFields on Post {
    id
    categories {
      edges {
        node {
          databaseId
          id
          name
          slug
        }
      }
    }
    excerpt
    databaseId
    date
    modified
    isSticky
    postId
    slug
    title
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
`;

export const QUERY_ALL_POSTS_INDEX = gql`
  ${POST_FIELDS}
  query AllPostsIndex {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS_ARCHIVE = gql`
  ${POST_FIELDS}
  query AllPostsArchive {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_ALL_POSTS = gql`
  ${POST_FIELDS}
  query AllPosts {
    posts(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_POST_BY_SLUG = gql`
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      categories {
        edges {
          node {
            databaseId
            id
            name
            slug
          }
        }
      }
      content
      date
      readingTime
      featuredImage {
        node {
          sourceUrl
        }
      }
      seo {
        description
        title
      }
      modified
      databaseId
      title
      slug
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID_INDEX = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(first: 10000, where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID_ARCHIVE = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(first: 10000, where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_POSTS_BY_CATEGORY_ID = gql`
  ${POST_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    posts(first: 10000, where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_POST_SEO_BY_SLUG = gql`
  query PostSEOBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      seo {
        metaDesc
        title
        readingTime
        opengraphImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;

export const QUERY_POST_PER_PAGE = gql`
  query PostPerPage {
    allSettings {
      readingSettingsPostsPerPage
    }
  }
`;

export const QUERY_ALL_POST_SLUGS = gql`
  query AllPostSlugs {
    posts(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const GET_HOME_PAGE_POSTS = gql`
  query postsforHomePage {
    posts(first: 4) {
      nodes {
        featuredImage {
          node {
            sourceUrl
          }
        }
        id
        slug
        title
        date
      }
    }
  }
`;
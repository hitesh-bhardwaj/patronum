import { gql } from '@apollo/client';

export const QUERY_ALL_WEBSTORIES = gql`
  query GETALLWEBSTORIES {
    webStories(first: 1000) {
      nodes {
        title
        slug
        date
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`

export const QUERY_ALL_WEBSTORIES_SLUG = gql`
query getAllWebstoriesSlug {
  webStories(first: 1000) {
    edges {
      node {
        slug
      }
    }
  }
}
`

export const QUERY_WEBSTORY_BY_SLUG = gql`
  query getWebstoryBySlug($id: ID!) {
    webStory(id: $id, idType: SLUG) {
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      seo {
        title
        description
      }
      slug
      title
      date
    }
  }
`
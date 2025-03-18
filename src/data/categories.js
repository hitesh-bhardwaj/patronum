import { gql } from '@apollo/client';

export const QUERY_ALL_CATEGORIES = gql`
  query AllCategories {
    categories(first: 10000, where: {exclude: "dGVybToxODQ"}) {
      edges {
        node {
          databaseId
          id
          name
          slug
        }
      }
    }
  }
`;

export const QUERY_CATEGORY_BY_SLUG = gql`
  query CategoryBySlug($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      databaseId
      description
      id
      name
      slug
    }
  }
`;
import { gql } from '@apollo/client';

export const QUERY_HEADER_MENU = gql`
query getHeaderMenu {
    menu(id: "header-menu", idType: SLUG) {
      id
      slug
      name
      menuItems {
        nodes {
          label
          path
          childItems {
            nodes {
              label
              path
            }
          }
        }
      }
    }
  }
`;
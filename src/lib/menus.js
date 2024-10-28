import { getApolloClient } from './apollo-client';
import { QUERY_HEADER_MENU } from '@/data/menus';

export async function getHeaderMenu() {
    const apolloClient = getApolloClient();
  
    const data = await apolloClient.query({
      query: QUERY_HEADER_MENU,
    });
  
    const menu = data?.data.menu;
  
    return {
      menu,
    };
  }
import { getApolloClient } from './apollo-client';

import {
    QUERY_WEBSTORY_BY_SLUG,
} from '../data/webstories';

export async function getWebstoryBySlug(slug) {
    const apolloClient = getApolloClient();
  
    let webstoryData;

    try {
        webstoryData = await apolloClient.query({
          query: QUERY_WEBSTORY_BY_SLUG,
          variables: {
            slug,
          },
        });
      } catch (e) {
        console.log(`[webstories][getWebstoryBySlug] Failed to query webstory data: ${e.message}`);
        throw e;
      }
  
    if (!webstoryData?.data.webStory) return { webstory: undefined };

    const webstory = [webstoryData?.data.webStory].map(webstory => webstory)[0];
  
    return {
      webstory,
    };
  }

import { GraphQLClient, type RequestDocument } from 'graphql-request';

import { graphql} from '@/generated/gql';

const Subgraphs: RequestDocument = graphql(`
  query Subgraphs {
    characterAttributes {
        id
        attribute
        character {
        nft {
            tokenId
        }
        }
        value
    }
  }
`) as RequestDocument;

export type QuerySubgraphsArgs = {
  client: GraphQLClient;
};
export async function querySubgraphs({
  client
}: QuerySubgraphsArgs) {
  console.log("Subgraphs");
  console.log(Subgraphs);
  return await client.request(Subgraphs);
}
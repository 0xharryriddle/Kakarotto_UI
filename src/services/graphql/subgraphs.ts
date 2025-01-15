import { GraphQLClient, type RequestDocument } from "graphql-request";
// import type { SubgraphsQueryVariables } from "@/generated/graphql";

import { graphql } from "@/generated/gql";

export type QuerySubgraphsArgs = {
  client: GraphQLClient;
  query: RequestDocument;
  variables?: any;
};

export async function querySubgraphs({
  client,
  query,
  variables,
}: QuerySubgraphsArgs) {
  try {
    const data = await client.request(query, variables);
    return data;
  } catch (error) {
    console.error("Error fetching subgraphs:", error);
    throw error; // Rethrow the error to handle it in the component
  }
}

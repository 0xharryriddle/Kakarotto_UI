import { GraphQLClient } from "graphql-request";

import { env } from "@/env/server";

if (!env.ROOT_URI) {
  throw new Error("ROOT_URI is not defined in the environment variables.");
}

// this hits the graphql api exposed in the /app/graphql/route.ts file
export const client = new GraphQLClient(env.ROOT_URI);

// export const client = new GraphQLClient(env.ROOT_URI, {
//   method: "POST",
// });

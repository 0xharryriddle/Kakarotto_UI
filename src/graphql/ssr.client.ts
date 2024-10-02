import { GraphQLClient } from "graphql-request";

import { env } from "@/env/server";

if (!env.ROOT_URI) {
  throw new Error("ROOT_URI is not defined in the environment variables.");
}

export const client = new GraphQLClient(env.ROOT_URI, {
  method: "POST",
});

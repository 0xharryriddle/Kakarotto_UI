import { GraphQLClient } from "graphql-request";

const graphqlEnvironment = process.env.NEXT_PUBLIC_ENVIRONMENT_GRAPHQL;
const graphqlDevelopment = process.env.NEXT_PUBLIC_DEVELOPMENT_GRAPHQL_URL;
const graphqlProduction = process.env.NEXT_PUBLIC_PRODUCTION_GRAPHQL_URL;

export const client = new GraphQLClient(
  graphqlEnvironment &&
  graphqlEnvironment == "development" &&
  graphqlDevelopment
    ? graphqlDevelopment
    : graphqlEnvironment &&
      graphqlEnvironment == "production" &&
      graphqlProduction
    ? graphqlProduction
    : "http://localhost:3000/graphql",
  {
    method: "POST",
  }
);

// export const client = new GraphQLClient("/graphql");

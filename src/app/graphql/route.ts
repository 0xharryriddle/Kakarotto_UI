import { GraphQLClient } from "graphql-request";
import { NextResponse } from "next/server";
import { z } from "zod";

// import { env } from "@/env/server";

const subgraphQueryUrl =
  "https://api.studio.thegraph.com/query/77725/kakarottosubgraph/version/latest";

const client = new GraphQLClient(subgraphQueryUrl, {
  headers: {
    // Authorization: `Bearer ${env.API_KEY}`,
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    Pragma: "no-cache",
    Expires: "0",
    // cache: "no-cache",
  },
});

const GraphqlReqSchema = z.object({
  query: z.string().min(1),
  operationName: z.string().optional().nullable(),
  variables: z.record(z.unknown()).optional().nullable(),
});

async function process(request: Request) {
  const body = await request.json();

  const parsedGqlRequest = GraphqlReqSchema.safeParse(body);
  if (!parsedGqlRequest.success) {
    return NextResponse.json(
      { error: parsedGqlRequest.error },
      { status: 400 }
    );
  }
  const gqlRequest = parsedGqlRequest.data;

  const gqlResponse: any = await client.request(
    gqlRequest.query,
    gqlRequest.variables ?? undefined
  );

  console.log(gqlResponse);

  return NextResponse.json({ data: gqlResponse }, { status: 200 });
}

export async function GET(request: Request) {
  return await process(request);
}

export async function POST(request: Request) {
  return await process(request);
}

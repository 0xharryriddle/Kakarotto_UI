import { gql, RequestDocument } from "graphql-request";
import { graphql } from "@/generated/gql";

export const GET_COUNT: RequestDocument = graphql(`
  query GetCount {
    counts {
      id
      orderTotal
      orderCharacterTotal
      orderTreasureTotal
      orderItemTotal
      characterTotal
      treasureTotal
      itemTotal
      characterStarted
      itemStarted
      salesTotal
      creatorEarningTotal
      daoEarningTotal
    }
  }
`) as RequestDocument;

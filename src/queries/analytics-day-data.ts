import { gql, RequestDocument } from "graphql-request";
import { graphql } from "@/generated/gql";

export const GET_ALL_ANALYTICS_DAY_DATA: RequestDocument = graphql(`
  query GetAllAnalyticsDayData {
    analyticsDayDatas {
      id
      date
      sales
      volume
      creatorsEarning
      daoEarning
    }
  }
`) as RequestDocument;

export const GET_ANALYTICS_DAY_DATA_BY_DATE: RequestDocument = graphql(`
  query GetAnalyticsDayData($date: BigInt!) {
    analyticsDayDatas(where: { date: $date }) {
      id
      date
      sales
      volume
      creatorsEarning
      daoEarning
    }
  }
`) as RequestDocument;

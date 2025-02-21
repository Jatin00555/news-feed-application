import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";
import { APIQueryPayloads } from "../types/sliceTypes";
import { sanitizeObject } from "../utils/helpers";

export const guardianApiSlice = createApi({
  reducerPath: "guardianApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.GUARDIAN_API.BASE_URL }),
  endpoints: (builder) => ({
    fetchArticles: builder.query({
      query: (
        filters: APIQueryPayloads,
        page: number = 1,
        pageSize: number = 10
      ) => {
        const { query, category, from, to } = filters;
        const params = sanitizeObject({
          q: query || "latest",
          section: category,
          from,
          to,
          page,
          pageSize,
          "api-key": config.GUARDIAN_API.KEY,
        });
        return {
          url: `search`,
          params: params,
        };
      },
    }),
  }),
});

export const {
  useFetchArticlesQuery: useFetchGuardianArticlesQuery,
  useLazyFetchArticlesQuery: useLazyFetchGuardianArticlesQuery,
} = guardianApiSlice;
export default guardianApiSlice;

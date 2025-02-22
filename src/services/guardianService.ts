import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";
import { APIQueryPayloads } from "../types/sliceTypes";
import { normalizeNewsData, sanitizeObject } from "../utils/helpers";
import { guardian } from "../utils/staticData";

export const guardianApiSlice = createApi({
  reducerPath: "guardianApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.GUARDIAN_API.BASE_URL }),
  endpoints: (builder) => ({
    fetchArticles: builder.query({
      query: (filters: APIQueryPayloads) => {
        const { query, category, from, to, page = 1, pageSize = 10 } = filters;
        const params = sanitizeObject({
          q: query || "latest",
          section: category,
          from,
          to,
          page,
          pageSize,
          "api-key": config.GUARDIAN_API.KEY,
        });
        return { url: `search`, params };
      },

      transformResponse: (response: any) =>
        normalizeNewsData(guardian, response?.response?.results || []),

      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        const {
          category = "",
          query = "",
          from = "",
          to = "",
          page = 1,
        } = queryArgs;
        return `${endpointName}-${query}-${category}-${from}-${to}-${page}`;
      },

      merge: (currentCache, newItems) => {
        return [...(currentCache || []), ...newItems];
      },

      forceRefetch({ currentArg, previousArg }) {
        return JSON.stringify(currentArg) !== JSON.stringify(previousArg);
      },
    }),
  }),
});

export const {
  useFetchArticlesQuery: useFetchGuardianArticlesQuery,
  useLazyFetchArticlesQuery: useLazyFetchGuardianArticlesQuery,
} = guardianApiSlice;

export default guardianApiSlice;

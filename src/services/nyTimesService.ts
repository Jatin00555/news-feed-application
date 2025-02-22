import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";
import { APIQueryPayloads } from "../types/sliceTypes";
import { normalizeNewsData, sanitizeObject } from "../utils/helpers";
import { nyTimes } from "../utils/staticData";

export const nyTimesApiSlice = createApi({
  reducerPath: "nyTimesApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.NY_TIMES_API.BASE_URL }),
  endpoints: (builder) => ({
    fetchArticles: builder.query({
      query: (filters: APIQueryPayloads) => {
        const { query, category, from, to, page = 1, pageSize = 10 } = filters;
        const params = sanitizeObject({
          q: query || "latest",
          fq: category ? `section_name:${category}` : "",
          begin_date: from ? from.replace(/-/g, "") : undefined,
          end_date: to ? to.replace(/-/g, "") : undefined,
          page,
          pageSize,
          "api-key": config.NY_TIMES_API.KEY,
        });
        return { url: `/svc/search/v2/articlesearch.json`, params };
      },

      transformResponse: (response: any) =>
        normalizeNewsData(nyTimes, response?.response?.docs || []),

      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        const { category = "", query = "", from = "", to = "" } = queryArgs;
        return `${endpointName}-${query}-${category}-${from}-${to}`;
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
  useFetchArticlesQuery: useFetchNYTimesArticlesQuery,
  useLazyFetchArticlesQuery: useLazyFetchNYTimesArticlesQuery,
} = nyTimesApiSlice;

export default nyTimesApiSlice;

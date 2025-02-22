import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";
import { APIQueryPayloads } from "../types/sliceTypes";
import { normalizeNewsData, sanitizeObject } from "../utils/helpers";
import { newsApi } from "../utils/staticData";

export const newsApiSlice = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.NEWS_API.BASE_URL }),
  endpoints: (builder) => ({
    fetchArticles: builder.query({
      query: (filters: APIQueryPayloads) => {
        const {
          query,
          category,
          from,
          to,
          author,
          page = 1,
          pageSize = 10,
        } = filters;
        const params = sanitizeObject({
          q: query || "latest",
          category,
          "from-date": from,
          "to-date": to,
          author,
          page,
          pageSize,
          apiKey: config.NEWS_API.KEY,
        });
        return { url: `/v2/top-headlines`, params };
      },

      transformResponse: (response: any) =>
        normalizeNewsData(newsApi, response?.articles || []),

      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        const {
          category = "",
          query = "",
          from = "",
          to = "",
          author = "",
          sourceString=''
        } = queryArgs;
        return `${endpointName}-${query}-${category}-${from}-${to}-${author}-${sourceString}`;
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
  useFetchArticlesQuery: useFetchNewsArticlesQuery,
  useLazyFetchArticlesQuery: useLazyFetchNewsArticlesQuery,
} = newsApiSlice;

export default newsApiSlice;

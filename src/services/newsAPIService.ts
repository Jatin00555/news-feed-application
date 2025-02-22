import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";
import { APIQueryPayloads } from "../types/sliceTypes";
import { sanitizeObject } from "../utils/helpers";

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
          category: category,
          "from-date": from,
          "to-date": to,
          author,
          page,
          pageSize,
          apiKey: config.NEWS_API.KEY,
        });
        return {
          url: `/v2/top-headlines`,
          params: params,
        };
      },
    }),
  }),
});

export const {
  useFetchArticlesQuery: useFetchArticleQuery,
  useLazyFetchArticlesQuery: useLazyArticleNewsQuery,
} = newsApiSlice;
export default newsApiSlice;

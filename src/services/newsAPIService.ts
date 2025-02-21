import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";

export const newsApiSlice = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.NEWS_API.BASE_URL }),
  endpoints: (builder) => ({
    fetchArticles: builder.query({
      query: ({ query, page }) => ({
        url: `v2/everything`,
        params: { q: query, page, apiKey: config.NEWS_API.KEY },
      }),
    }),
  }),
});

export const { useFetchArticlesQuery } = newsApiSlice;
export default newsApiSlice;

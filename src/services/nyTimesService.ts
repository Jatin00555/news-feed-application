import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";

export const nyTimesApiSlice = createApi({
  reducerPath: "nyTimesApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.NY_TIMES_API.BASE_URL }),
  endpoints: (builder) => ({
    fetchArticles: builder.query({
      query: ({ query, page }) => ({
        url: `svc/search/v2/articlesearch.json`,
        params: { q: query, page },
        headers: { "api-key": config.NY_TIMES_API.KEY },
      }),
    }),
  }),
});

export const { useFetchArticlesQuery: useFetchNYTimesArticlesQuery } =
  nyTimesApiSlice;
export default nyTimesApiSlice;

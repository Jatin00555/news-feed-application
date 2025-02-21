import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";

export const guardianApiSlice = createApi({
  reducerPath: "guardianApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.GUARDIAN_API.BASE_URL }),
  endpoints: (builder) => ({
    fetchArticles: builder.query({
      query: ({ query, page }) => {
        return {
          url: `search`,
          params: { q: query, page, "api-key": config.GUARDIAN_API.KEY },
        };
      },
    }),
  }),
});

export const {
  useFetchArticlesQuery: useFetchGuardianArticlesQuery,
  useLazyFetchArticlesQuery: useFetchGuardianArticlesQueryLazy,
} = guardianApiSlice;
export default guardianApiSlice;

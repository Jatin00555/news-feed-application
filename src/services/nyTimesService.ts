import { APIQueryPayloads } from "./../types/sliceTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../config";
import { sanitizeObject } from "../utils/helpers";

export const nyTimesApiSlice = createApi({
  reducerPath: "nyTimesApi",
  baseQuery: fetchBaseQuery({ baseUrl: config.NY_TIMES_API.BASE_URL }),
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
          fq: `${category ? `section_name:${category}` : ""}`,
          begin_date: from.replace(/-/g, ""),
          end_date: to.replace(/-/g, ""),
          page,
          pageSize,
          "api-key": config.NY_TIMES_API.KEY,
        });
        return {
          url: `/svc/search/v2/articlesearch.json`,
          params: params,
        };
      },
    }),
  }),
});

export const {
  useFetchArticlesQuery: useFetchNYTimesArticlesQuery,
  useLazyFetchArticlesQuery: useLazyFetchNYTimesArticlesQuery,
} = nyTimesApiSlice;
export default nyTimesApiSlice;

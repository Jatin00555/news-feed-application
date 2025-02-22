import { useEffect, useState, useMemo, useRef } from "react";
import { useLazyFetchNewsArticlesQuery } from "../../services/newsAPIService";
import { useLazyFetchNYTimesArticlesQuery } from "../../services/nyTimesService";
import { useLazyFetchGuardianArticlesQuery } from "../../services/guardianService";
import { categoryMapping, guardian, newsApi, nyTimes } from "../staticData";
import { debounce } from "lodash";
import { getDateRange } from "../helpers";
import { NewsArticleType } from "../../types/commonTypes";
import { useDispatch } from "react-redux";
import { setAuthorList } from "../../storage/slices/applicationInfoSlice";

interface FetchQueryOptions {
  source?: string[];
  category?: string;
  authors?: string;
  query?: string;
  timeline?: string;
}

const useFetchNews = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<NewsArticleType[]>([]);
  const [selectedSource, setSelectedSource] = useState<string[]>([]);
  const [authorFilter, setAuthorFilter] = useState<string>("");
  const pageCount = useRef<Record<string, number>>({
    [newsApi]: 1,
    [nyTimes]: 1,
    [guardian]: 1,
  });
  const queryString = useRef<string>("");

  const [fetchNewsOrg, { data: newsOrgData, isLoading: newsOrgsLoading }] =
    useLazyFetchNewsArticlesQuery();
  const [fetchNyTimes, { data: nyTimesData, isLoading: nyTimesLoading }] =
    useLazyFetchNYTimesArticlesQuery();
  const [fetchGuardian, { data: guardianData, isLoading: guardianLoading }] =
    useLazyFetchGuardianArticlesQuery();

  // Store API responses in a dictionary instead of switch-case
  const apiResponses: Record<string, NewsArticleType[] | undefined> = {
    [newsApi]: newsOrgData,
    [nyTimes]: nyTimesData,
    [guardian]: guardianData,
  };

  useEffect(() => {
    dispatch(
      setAuthorList(
        newsOrgData?.flatMap((ele) =>
          ele.author
            ? {
                key: ele.author,
                label: ele.author,
              }
            : []
        ) || []
      )
    );
  }, [newsOrgData, dispatch]);

  useEffect(() => {
    if (authorFilter) {
      setData(newsOrgData || []);
    } else if (selectedSource.length) {
      const aggregatedData = selectedSource.flatMap(
        (source) => apiResponses[source] || []
      );
      setData(aggregatedData);
    } else {
      setData([]);
    }
  }, [newsOrgData, nyTimesData, guardianData, selectedSource, authorFilter]);

  useEffect(() => {
    setIsLoading(
      (newsOrgsLoading || nyTimesLoading || guardianLoading) && !data.length
    );
  }, [newsOrgsLoading, nyTimesLoading, guardianLoading, data]);

  const fetchNews = useMemo(
    () =>
      debounce((opts: FetchQueryOptions) => {
        const { source, query = "", category, timeline, authors = "" } = opts;
        const str = `${query}-${category}-${authors}-${timeline}`;
        if (queryString.current && queryString.current !== str) {
          // Reset pagination when query changes
          Object.keys(pageCount.current).forEach(
            (key) => (pageCount.current[key] = 1)
          );
        }
        queryString.current = str;
        setAuthorFilter(authors);

        const fetchFunctions: Record<string, Function> = {
          [newsApi]: fetchNewsOrg,
          [nyTimes]: fetchNyTimes,
          [guardian]: fetchGuardian,
        };

        const sourcesToFetch = source?.length
          ? source
          : Object.keys(fetchFunctions);
        setSelectedSource(sourcesToFetch);

        sourcesToFetch.forEach((key) => {
          const { from = "", to = "" } = timeline ? getDateRange(timeline) : {};
          fetchFunctions[key]?.({
            query,
            category: category ? categoryMapping[category]?.[key] : "",
            page: pageCount.current[key],
            from,
            to,
            author: authors,
          });
          pageCount.current[key] += 1;
        });
      }, 500),
    []
  );

  return { isLoading, data, fetchNews };
};

export default useFetchNews;

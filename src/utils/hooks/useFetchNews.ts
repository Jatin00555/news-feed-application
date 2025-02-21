import { useEffect, useState, useMemo } from "react";
import { useLazyArticleNewsQuery } from "../../services/newsAPIService";
import { useLazyFetchNYTimesArticlesQuery } from "../../services/nyTimesService";
import { useLazyFetchGuardianArticlesQuery } from "../../services/guardianService";
import { categoryMapping, guardian, newsApi, nyTimes } from "../staticData";
import { debounce } from "lodash";
import { getDateRange, normalizeNewsData } from "../helpers";
import { NewsApiArticle, NewsArticleType } from "../../types/commonTypes";
import { setAuthorList } from "../../storage/slices/applicationInfoSlice";
import { useDispatch } from "react-redux";

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

  const [fetchNewsOrg, { data: newsOrgData, isLoading: newsOrgsLoading }] =
    useLazyArticleNewsQuery();
  const [fetchNyTimes, { data: nyTimesData, isLoading: nyTimesLoading }] =
    useLazyFetchNYTimesArticlesQuery();
  const [fetchGuardian, { data: guardianData, isLoading: guardianLoading }] =
    useLazyFetchGuardianArticlesQuery();

  useEffect(() => {
    if (newsOrgData?.articles) {
      dispatch(
        setAuthorList(
          newsOrgData.articles.map((ele: NewsApiArticle) => ({
            key: ele.author,
            label: ele.author,
          })) ?? []
        )
      );
    }
  }, [newsOrgData, dispatch]);

  useEffect(() => {
    if (authorFilter) {
      setData(normalizeNewsData(newsApi, newsOrgData?.articles ?? []));
    } else if (selectedSource.length) {
      const aggregatedData: NewsArticleType[] = selectedSource.flatMap(
        (source) => {
          switch (source) {
            case newsApi:
              return normalizeNewsData(source, newsOrgData?.articles ?? []);
            case nyTimes:
              return normalizeNewsData(
                source,
                nyTimesData?.response?.docs ?? []
              );
            case guardian:
              return normalizeNewsData(
                source,
                guardianData?.response?.results ?? []
              );
            default:
              return [];
          }
        }
      );
      setData(aggregatedData);
    } else {
      setData([]);
    }
  }, [newsOrgData, nyTimesData, guardianData, selectedSource, authorFilter]);

  useEffect(() => {
    setIsLoading(
      !data.length && (newsOrgsLoading || nyTimesLoading || guardianLoading)
    );
  }, [newsOrgsLoading, nyTimesLoading, guardianLoading, data]);

  const fetchNews = useMemo(
    () =>
      debounce((opts: FetchQueryOptions) => {
        const { source, query = "", category, timeline, authors = "" } = opts;
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
            page: 1,
            from,
            to,
            author: authors,
          });
        });
      }, 1000),
    []
  );

  return { isLoading, data, fetchNews };
};

export default useFetchNews;

import TopFilter from "./filterComponents/TopFilters";
import {
  BorderBoxColumnStack,
  FullSizeBoxStack,
} from "./coreComponents/styledComponents";
import ContentArea from "./contentComponents/ContentArea";
import { useSelector } from "react-redux";
import { RootState } from "../storage/globalStore/store";
import { useEffect, useCallback } from "react";
import useFetchNews from "../utils/hooks/useFetchNews";
import { persistFiltersToLocalStorage } from "../storage/slices/filterSlice";
import { trimString } from "../utils/helpers";
import NoData from "./filterComponents/NoData";
import { newsAreaContainer } from "./styles";

const NewsArea = () => {
  const filters = useSelector((state: RootState) => state.filters);
  const { source, category, query, author, timeLine } = filters;
  const { data, isLoading, fetchNews } = useFetchNews();

  // Persist filters (excluding unnecessary fields)
  useEffect(() => {
    persistFiltersToLocalStorage({
      ...filters,
      query: "",
      timeLine: null,
    });
  }, [filters]);

  const handleFetchNews = useCallback(() => {
    fetchNews({
      source: source.map((src) => trimString(src.key)),
      category: trimString(category[0]?.key),
      timeline: trimString(timeLine?.key),
      query,
      authors: author.length
        ? encodeURIComponent(author.map((aut) => aut.key).join(" OR "))
        : "",
    });
  }, [source, category, query, author, timeLine, fetchNews]);

  useEffect(() => {
    handleFetchNews();
  }, [handleFetchNews]);

  return (
    <FullSizeBoxStack flexDirection="row">
      <BorderBoxColumnStack sx={newsAreaContainer}>
        <TopFilter />
        {!isLoading && data.length === 0 ? (
          <NoData />
        ) : (
          <ContentArea
            hasMore={true}
            articles={data}
            loadMore={handleFetchNews}
            isLoading={isLoading}
          />
        )}
      </BorderBoxColumnStack>
    </FullSizeBoxStack>
  );
};

export default NewsArea;

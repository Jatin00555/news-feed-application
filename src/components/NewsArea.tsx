import TopFilter from "./filterComponents/TopFilters";
import {
  BorderBoxColumnStack,
  FullSizeBoxStack,
} from "./coreComponents/styledComponents";
import ContentArea from "./contentComponents/ContentArea";
import { useSelector } from "react-redux";
import { RootState } from "../storage/globalStore/store";
import { useEffect } from "react";
import useFetchNews from "../utils/hooks/useFetchNews";
import { persistFiltersToLocalStorage } from "../storage/slices/filterSlice";
import { trimString } from "../utils/helpers";
import NoData from "./filterComponents/NoData";

const NewsArea = () => {
  const filters = useSelector((state: RootState) => state.filters);
  const { source, category, query, author, timeLine } = filters;
  const { data, isLoading, fetchNews } = useFetchNews();

  useEffect(() => {
    const clone = structuredClone(filters);
    clone.query = "";
    clone.timeLine = null;
    persistFiltersToLocalStorage(clone);
  }, [filters]);

  useEffect(() => {
    const authors = author.length
      ? encodeURIComponent(author.map((aut) => aut.key).join(" OR "))
      : "";
    fetchNews({
      source: source.map((src) => trimString(src.key)),
      category: trimString(category[0]?.key),
      timeline: trimString(timeLine?.key),
      query: query,
      authors: authors,
    });
  }, [source, category, query, author, timeLine]);

  return (
    <FullSizeBoxStack flexDirection={"row"}>
      <BorderBoxColumnStack
        flex={1}
        alignItems={"center"}
        padding={"20px"}
        height={"100%"}
      >
        <TopFilter />
        <ContentArea
          hasMore={true}
          articles={data}
          loadMore={function (): void {
            throw new Error("Function not implemented.");
          }}
          isLoading={isLoading}
        />
        {!isLoading && data.length === 0 && <NoData />}
      </BorderBoxColumnStack>
    </FullSizeBoxStack>
  );
};

export default NewsArea;

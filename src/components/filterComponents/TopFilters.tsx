import { Paper } from "@mui/material";
import TextFilter from "./TextFilter";
import CategoryFilter from "./CategoryFilter";
import CategoryAccordion from "./CategoryAccordion";
import {
  BorderBoxCenterColumnStack,
  BorderBoxRowStack,
} from "../coreComponents/styledComponents";
import useIsMobile from "../../utils/hooks/useIsMobileView";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../storage/globalStore/store";
import {
  setCategory,
  setSearchQuery,
  setTimeLine,
} from "../../storage/slices/filterSlice";
import { ToggleElementType } from "../../types/commonTypes";
import { newsCategories, timeLineList } from "../../utils/staticData";
import TimelineFilter from "./TimelineFilter";
import { useCallback } from "react";

const TopFilter = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const {
    query: searchQuery,
    category: selectedCategories,
    timeLine: selectedTimeLine,
  } = useSelector((state: RootState) => state.filters);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(setSearchQuery(e.target.value)),
    [dispatch]
  );

  const handleTimelineChange = useCallback(
    (item: ToggleElementType) => dispatch(setTimeLine(item)),
    [dispatch]
  );

  const handleCategoryToggle = useCallback(
    (selectedCategory: ToggleElementType) => {
      dispatch(
        selectedCategories?.length &&
          selectedCategories[0].key === selectedCategory.key
          ? setCategory([])
          : setCategory([selectedCategory])
      );
    },
    [dispatch, selectedCategories]
  );
  return (
    <Paper
      elevation={3}
      sx={{
        mb: 3,
        borderRadius: 2,
        bgcolor: "primary.main",
      }}
    >
      <BorderBoxCenterColumnStack p={2} gap={2}>
        <BorderBoxRowStack gap={isMobile ? 1 : 2}>
          <TextFilter value={searchQuery} onChange={handleSearchChange} />
          <TimelineFilter
            items={timeLineList}
            onChange={handleTimelineChange}
            selectedItem={selectedTimeLine}
          />
        </BorderBoxRowStack>
        {!isMobile && (
          <CategoryFilter
            categories={newsCategories}
            selectedCategories={selectedCategories}
            handleCategoryToggle={handleCategoryToggle}
          />
        )}
      </BorderBoxCenterColumnStack>
      {isMobile && (
        <CategoryAccordion
          categories={newsCategories}
          selectedCategories={selectedCategories}
          handleCategoryToggle={handleCategoryToggle}
        />
      )}
    </Paper>
  );
};

export default TopFilter;

import { Paper } from "@mui/material";
import TextFilter from "./TextFilter";
import CategoryFilter from "./CategoryFilter";
import CategoryAccordion from "./CategoryAccordion";
import { BorderBoxCenterColumnStack } from "../coreComponents/styledComponents";
import useIsMobile from "../../utils/hooks/useIsMobileView";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../storage/globalStore/store";
import { setCategory, setSearchQuery } from "../../storage/slices/filterSlice";

const categories = [
  "Politics",
  "Business",
  "Technology",
  "Health",
  "Science",
  "Sports",
  "Entertainment",
  "World",
];

const TopFilter = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const { query: searchQuery, category: selectedCategories } = useSelector(
    (state: RootState) => state.filters
  );

  const handleCategoryToggle = (category: string) => {
    dispatch(setCategory([category]));
  };

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
        <TextFilter
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        {!isMobile && (
          <CategoryFilter
            categories={categories}
            selectedCategories={selectedCategories}
            handleCategoryToggle={handleCategoryToggle}
          />
        )}
      </BorderBoxCenterColumnStack>
      {isMobile && (
        <CategoryAccordion
          categories={categories}
          selectedCategories={selectedCategories}
          handleCategoryToggle={handleCategoryToggle}
        />
      )}
    </Paper>
  );
};

export default TopFilter;

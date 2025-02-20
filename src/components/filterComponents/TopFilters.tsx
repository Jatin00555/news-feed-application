import { useState } from "react";
import { Paper } from "@mui/material";
import TextFilter from "./TextFilter";
import CategoryFilter from "./CategoryFilter";
import CategoryAccordion from "./CategoryAccordion";
import { BorderBoxCenterColumnStack } from "../coreComponents/styledComponents";
import useIsMobile from "../../utils/hooks/useIsMobileView";

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
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
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
        <TextFilter value="1" onChange={() => {}} />
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

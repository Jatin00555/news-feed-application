import { useState } from "react";
import { Paper } from "@mui/material";
import TextFilter from "./TextFilter";
import CategoryFilter from "./CategoryFilter";
import CategoryAccordion from "./CategoryAccordion";
import { BorderBoxStack } from "../coreComponents/styledComponents";
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
        position: "absolute",
        bgcolor: "primary.main",
      }}
      id="top"
    >
      <BorderBoxStack
        sx={{
          p: 2,
          flexDirection: "column",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextFilter value="1" onChange={() => {}} />
        {!isMobile && (
          <CategoryFilter
            categories={categories}
            selectedCategories={selectedCategories}
            handleCategoryToggle={handleCategoryToggle}
          />
        )}
      </BorderBoxStack>
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

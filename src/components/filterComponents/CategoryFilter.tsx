import { Stack } from "@mui/material";
import CustomChip from "./CustomChip";
import { ToggleElementType } from "../../types/commonTypes";

interface CategoryFilterProps {
  categories: ToggleElementType[];
  selectedCategories: ToggleElementType[];
  handleCategoryToggle: (category: ToggleElementType) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategories,
  handleCategoryToggle,
}) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      flexWrap="wrap"
      alignItems="center"
      sx={{ minWidth: "50%" }}
    >
      {categories.map((category) => (
        <CustomChip
          key={category.key}
          label={category.label}
          isSelected={selectedCategories.some(
            (ele) => ele.key === category.key
          )}
          onClick={() => handleCategoryToggle(category)}
        />
      ))}
    </Stack>
  );
};

export default CategoryFilter;

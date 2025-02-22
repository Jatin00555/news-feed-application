import { Stack } from "@mui/material";
import CustomChip from "./CustomChip";
import { ToggleElementType } from "../../types/commonTypes";
import { categoryContainer } from "../styles";

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
    <Stack sx={categoryContainer}>
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

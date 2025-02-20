import { Stack } from "@mui/material";
import CustomChip from "./CustomChip";

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  handleCategoryToggle: (category: string) => void;
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
          key={category}
          label={category}
          isSelected={selectedCategories.includes(category)}
          onClick={() => handleCategoryToggle(category)}
        />
      ))}
    </Stack>
  );
};

export default CategoryFilter;

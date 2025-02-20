import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterListIcon from "@mui/icons-material/FilterList";
import CustomChip from "./CustomChip";
import { useTranslation } from "react-i18next";

interface CategoryAccordionProps {
  categories: string[];
  selectedCategories: string[];
  handleCategoryToggle: (category: string) => void;
}

const CategoryAccordion: React.FC<CategoryAccordionProps> = ({
  categories,
  selectedCategories,
  handleCategoryToggle,
}) => {
  const { t } = useTranslation();
  return (
    <Accordion
      disableGutters
      elevation={0}
      sx={{
        "&:before": { display: "none" },
        borderTop: 1,
        backgroundColor: "primary.main",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "text.primary" }} />}
        sx={{ px: 2, minHeight: 48 }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <FilterListIcon fontSize="small" sx={{ color: "text.primary" }} />
          <Typography variant="body2">{t("categories")}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 2, pt: 0, pb: 2 }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {categories.map((category) => (
            <CustomChip
              key={category}
              label={category}
              isSelected={selectedCategories.includes(category)}
              onClick={() => handleCategoryToggle(category)}
            />
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default CategoryAccordion;

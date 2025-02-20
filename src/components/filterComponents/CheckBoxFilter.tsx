import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  SxProps,
} from "@mui/material";
import { useCallback } from "react";

export interface CheckboxFilterProps {
  title: string;
  options: string[];
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  sx?: SxProps;
}

const CheckBoxFilter = (props: CheckboxFilterProps) => {
  const { title, options, sx, selectedItems, setSelectedItems } = props;
  const handleToggle = useCallback(
    (item: string) => {
      setSelectedItems((prev) =>
        prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
      );
    },
    [setSelectedItems]
  );

  return (
    <Box sx={{ ...sx }}>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        id={`${title}-label`}
      >
        {title} :
      </Typography>
      <FormGroup aria-labelledby={`${title}-label`}>
        {options.map((item) => (
          <FormControlLabel
            key={item}
            control={
              <Checkbox
                checked={selectedItems.includes(item)}
                onChange={() => handleToggle(item)}
                sx={{
                  color: "text.primary",
                  "&.Mui-checked": { color: "text.secondary" },
                }}
              />
            }
            label={item}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default CheckBoxFilter;

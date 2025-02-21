import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  SxProps,
} from "@mui/material";
import { ToggleElementType } from "../../types/commonTypes";

export interface CheckboxFilterProps {
  title: string;
  options: ToggleElementType[];
  selectedItems: ToggleElementType[];
  setSelectedItems: (items: ToggleElementType[]) => void;
  sx?: SxProps;
}

const CheckBoxFilter = (props: CheckboxFilterProps) => {
  const { title, options, sx, selectedItems, setSelectedItems } = props;
  const handleToggle = (item: ToggleElementType) => {
    const exists = selectedItems.some((i) => i.key === item.key);
    const finalItems = exists
      ? selectedItems.filter((i) => i.key !== item.key)
      : [...selectedItems, item];
    setSelectedItems(finalItems);
  };

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
            key={item.key}
            control={
              <Checkbox
                checked={selectedItems.some((i) => i.key === item.key)}
                onChange={() => handleToggle(item)}
                sx={{
                  color: "text.primary",
                  "&.Mui-checked": { color: "text.secondary" },
                }}
              />
            }
            label={item.label}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default CheckBoxFilter;

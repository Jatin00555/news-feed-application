import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  SxProps,
} from "@mui/material";

export interface CheckboxFilterProps {
  title: string;
  options: string[];
  selectedItems: string[];
  setSelectedItems: (items: string[]) => void;
  sx?: SxProps;
}

const CheckBoxFilter = (props: CheckboxFilterProps) => {
  const { title, options, sx, selectedItems, setSelectedItems } = props;

  const handleToggle = (item: string) => {
    const finalItems = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
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

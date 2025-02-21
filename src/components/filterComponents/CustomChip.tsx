import Chip from "@mui/material/Chip";

interface CustomChipProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
  size?: "small" | "medium";
}

const CustomChip = (props: CustomChipProps) => {
  const { label, isSelected, size, onClick } = props;
  return (
    <Chip
      label={label}
      clickable
      size={size}
      onClick={onClick}
      variant={isSelected ? "outlined" : "filled"}
      sx={{
        backgroundColor: isSelected ? "background.default" : "unset",
        "&:hover": {
          color: "text.secondary",
        },
      }}
      aria-label={`Filter ${label}`}
    />
  );
};

export default CustomChip;

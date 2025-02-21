import { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { ToggleElementType } from "../../types/commonTypes";

interface ResponsiveFilterProps {
  onChange?: (value: ToggleElementType) => void;
  items: ToggleElementType[];
  selectedItem?: ToggleElementType | null;
}

const TimelineFilter = (props: ResponsiveFilterProps) => {
  const { onChange, items, selectedItem } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (selected: ToggleElementType) => {
    onChange?.(selected);
    handleMenuClose();
  };

  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        <FilterAltIcon sx={{ color: "text.primary", fontSize: "30px" }} />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        {items.map((filter) => {
          const isSelected = filter.key === selectedItem?.key;
          return (
            <MenuItem
              key={filter.key}
              onClick={() => handleSelect(filter)}
              sx={{
                color: "primary.main",
                backgroundColor: isSelected ? "#D3D3D3" : "transparent",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              {filter.label}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default TimelineFilter;

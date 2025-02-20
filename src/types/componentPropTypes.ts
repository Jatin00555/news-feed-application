import { SxProps } from "@mui/material";

export interface DrawerToggleProps {
  isDrawerOpen: boolean;
  toggleDrawer: (status: boolean) => void;
}
export interface SideDrawerProps extends DrawerToggleProps {}

export interface TopBarProps extends DrawerToggleProps {}
export interface NewsAreaProps {}

export interface CheckboxFilterProps {
  title: string;
  options: string[];
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
  sx?: SxProps;
}

export interface TextFilterProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  sx?: object;
}

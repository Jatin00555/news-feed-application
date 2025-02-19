export interface DrawerToggleProps {
  isDrawerOpen: boolean;
  toggleDrawer: (status: boolean) => void;
}
export interface SideDrawerProps extends DrawerToggleProps {}

export interface TopBarProps extends DrawerToggleProps {}

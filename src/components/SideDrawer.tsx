import { Drawer, Box } from "@mui/material";
import { appBarHeight, drawerWidth } from "../utils/staticData";
import useIsMobile from "../utils/hooks/useIsMobileView";
import SideFilters from "./filterComponents/SideFilters";

export interface SideDrawerProps {
  isDrawerOpen: boolean;
  toggleDrawer: (status: boolean) => void;
}

const SideDrawer = ({ isDrawerOpen, toggleDrawer }: SideDrawerProps) => {
  const isMobile = useIsMobile();
  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      anchor="left"
      open={isDrawerOpen}
      onClose={() => toggleDrawer(false)}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: drawerWidth, bgcolor: "primary.main" },
      }}
      BackdropProps={{ style: { backgroundColor: "transparent" } }}
    >
      <Box sx={{ height: "100%", paddingTop: `${appBarHeight + 10}px` }}>
        <SideFilters />
      </Box>
    </Drawer>
  );
};

export default SideDrawer;

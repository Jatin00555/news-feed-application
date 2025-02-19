import { Drawer, Box } from "@mui/material";
import { SideDrawerProps } from "../types/componentPropTypes";

const SideDrawer = (props: SideDrawerProps) => {
  const { isDrawerOpen, toggleDrawer } = props;
  return (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      onClose={() => toggleDrawer(false)}
    >
      <Box width={250} sx={{ bgcolor: "primary.main", height: "100%" }}>
        
      </Box>
    </Drawer>
  );
};

export default SideDrawer;

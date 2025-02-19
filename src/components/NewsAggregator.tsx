import { Stack } from "@mui/material";
import TopBar from "./TopBar";
import { useState } from "react";
import SideDrawer from "./SideDrawer";

const NewsAggregator = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (status: boolean) => {
    setIsDrawerOpen(status);
  };

  return (
    <Stack width={"100vw"} height={"100vh"}>
      <TopBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <SideDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </Stack>
  );
};

export default NewsAggregator;

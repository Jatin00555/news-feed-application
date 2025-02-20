import { Stack } from "@mui/material";
import TopBar from "./TopBar";
import { useState } from "react";
import SideDrawer from "./SideDrawer";
import NewsArea from "./NewsArea";
import { BorderBoxStack } from "./coreComponents/styledComponents";
import { appBarHeight } from "../utils/staticData";

const NewsAggregator = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (status: boolean) => {
    setIsDrawerOpen(status);
  };

  return (
    <Stack
      width="100vw"
      height="100vh"
      sx={{
        bgcolor: "background.default",
        overflow: "hidden",
      }}
    >
      <TopBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <BorderBoxStack
        overflow="hidden"
        flexDirection={"row"}
        paddingTop={`${appBarHeight}px`}
      >
        <SideDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <NewsArea />
      </BorderBoxStack>
    </Stack>
  );
};

export default NewsAggregator;

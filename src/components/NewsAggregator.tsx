import { Stack } from "@mui/material";
import TopBar from "./TopBar";
import { useState } from "react";
import SideDrawer from "./SideDrawer";
import NewsArea from "./NewsArea";
import {
  BorderBoxRowStack,
} from "./coreComponents/styledComponents";
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
      <BorderBoxRowStack
        overflow="hidden"
        paddingTop={`${appBarHeight}px`}
        height={"100vh"}
      >
        <SideDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <NewsArea />
      </BorderBoxRowStack>
    </Stack>
  );
};

export default NewsAggregator;

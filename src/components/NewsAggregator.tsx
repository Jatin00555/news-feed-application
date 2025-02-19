import { Stack, useMediaQuery, useTheme, Box } from "@mui/material";
import TopBar from "./TopBar";
import { useState } from "react";
import SideDrawer from "./SideDrawer";
import NewsArea from "./NewsArea";

const NewsAggregator = () => {
  const theme = useTheme();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
      <TopBar
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        isMenuIconVisible={isMobile}
      />
      {isMobile && (
        <SideDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      )}
      <Box flex={1} overflow="auto">
        <NewsArea />
      </Box>
    </Stack>
  );
};

export default NewsAggregator;

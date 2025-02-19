import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { TopBarProps } from "../types/componentPropTypes";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

const TopBar = (props: TopBarProps) => {
  const { isDrawerOpen, toggleDrawer, isMenuIconVisible } = props;
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          {isMenuIconVisible && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => toggleDrawer(!isDrawerOpen)}
            >
              {isDrawerOpen ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t("news")}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;

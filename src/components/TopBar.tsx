import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import useIsMobile from "../utils/hooks/useIsMobileView";
import { appBarHeight } from "../utils/staticData";

interface TopBarProps {
  isDrawerOpen: boolean;
  toggleDrawer: (status: boolean) => void;
}

const TopBar = (props: TopBarProps) => {
  const { isDrawerOpen, toggleDrawer } = props;
  const isMobile = useIsMobile();
  const { t } = useTranslation();

  return (
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        height: `${appBarHeight}px`,
      }}
    >
      <Toolbar>
        {isMobile && (
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
  );
};

export default TopBar;

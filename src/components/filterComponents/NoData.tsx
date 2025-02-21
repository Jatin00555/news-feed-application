import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface NoDataProps {
  message?: string;
}

const NoData = (props: NoDataProps) => {
  const { t } = useTranslation();
  const {message=t('no_article_found')} = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="300px"
      gap={2}
      textAlign="center"
    >
      <Typography variant="h6" color="textSecondary">
        {message}
      </Typography>
    </Box>
  );
};

export default NoData;

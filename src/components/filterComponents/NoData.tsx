import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { BorderBoxCenterColumnStack } from "../coreComponents/styledComponents";

interface NoDataProps {
  message?: string;
}

const NoData = (props: NoDataProps) => {
  const { t } = useTranslation();
  const { message = t("no_article_found") } = props;
  return (
    <BorderBoxCenterColumnStack height="300px" gap={2}>
      <Typography variant="h6" color="textSecondary">
        {message}
      </Typography>
    </BorderBoxCenterColumnStack>
  );
};

export default NoData;

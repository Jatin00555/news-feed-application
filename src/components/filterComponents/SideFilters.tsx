import { useState } from "react";
import { Box } from "@mui/material";
import CheckBoxFilter from "./CheckBoxFilter";
import { useTranslation } from "react-i18next";
import { FullWidthBoxStack } from "../coreComponents/styledComponents";

const authors = ["Jane Doe", "John Smith", "Alice Johnson", "Bob Brown"];
const sources = ["BBC News", "CNN", "The Guardian", "Reuters"];

const SideFilters = () => {
  const { t } = useTranslation();
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([]);
  const [selectedSources, setSelectedSources] = useState<string[]>([]);

  return (
    <FullWidthBoxStack
      sx={{ paddingLeft: "20px", overflowX: "hidden", overflowY: "auto" }}
    >
      <Box>
        <CheckBoxFilter
          title={`${t("select_author")}`}
          options={authors}
          selectedItems={selectedAuthors}
          setSelectedItems={setSelectedAuthors}
        />
        <Box mt={2}>
          <CheckBoxFilter
            title={`${t("select_source")}`}
            options={sources}
            selectedItems={selectedSources}
            setSelectedItems={setSelectedSources}
          />
        </Box>
      </Box>
    </FullWidthBoxStack>
  );
};

export default SideFilters;

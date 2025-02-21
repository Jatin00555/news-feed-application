import { Box } from "@mui/material";
import CheckBoxFilter from "./CheckBoxFilter";
import { useTranslation } from "react-i18next";
import { FullWidthBoxStack } from "../coreComponents/styledComponents";
import { setAuthor, setSource } from "../../storage/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../storage/globalStore/store";
import { sourceAndQueryList } from "../../utils/staticData";

const authors = [
  { key: 1, label: "jatin" },
  { key: 2, label: "kumar" },
];

const SideFilters = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { author: selectedAuthor, source: selectedSource } = useSelector(
    (state: RootState) => state.filters
  );

  return (
    <FullWidthBoxStack
      sx={{ paddingLeft: "20px", overflowX: "hidden", overflowY: "auto" }}
    >
      <Box>
        <CheckBoxFilter
          title={`${t("select_source")}`}
          options={sourceAndQueryList}
          selectedItems={selectedSource}
          setSelectedItems={(items) => dispatch(setSource(items))}
        />

        <Box mt={2}>
          <CheckBoxFilter
            title={`${t("select_author")}`}
            options={authors}
            selectedItems={selectedAuthor}
            setSelectedItems={(items) => dispatch(setAuthor(items))}
          />
        </Box>
      </Box>
    </FullWidthBoxStack>
  );
};

export default SideFilters;

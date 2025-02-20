import TopFilter from "./filterComponents/TopFilters";
import {
  BorderBoxStack,
  FullSizeBoxStack,
} from "./coreComponents/styledComponents";

const NewsArea = () => {
  return (
    <FullSizeBoxStack flexDirection={"row"}>
      <BorderBoxStack
        sx={{
          flex: 1,
          alignItems: "center",
          padding: "20px",
          flexDirection: "column",
        }}
      >
        <TopFilter />
      </BorderBoxStack>
    </FullSizeBoxStack>
  );
};

export default NewsArea;

import TopFilter from "./filterComponents/TopFilters";
import {
  BorderBoxColumnStack,
  FullSizeBoxStack,
} from "./coreComponents/styledComponents";
import ContentArea from "./contentComponents/ContentArea";

const NewsArea = () => {
  return (
    <FullSizeBoxStack flexDirection={"row"}>
      <BorderBoxColumnStack flex={1} alignItems={"center"} padding={"20px"}>
        <TopFilter />
        <ContentArea />
      </BorderBoxColumnStack>
    </FullSizeBoxStack>
  );
};

export default NewsArea;

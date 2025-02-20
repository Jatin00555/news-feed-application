import { Stack, styled } from "@mui/material";

export const BorderBoxStack = styled(Stack)({
  boxSizing: "border-box",
});

export const FullWidthBoxStack = styled(BorderBoxStack)({
  width: "100%",
});

export const FullSizeBoxStack = styled(FullWidthBoxStack)({
  height: "100%",
});

export const BorderBoxRowStack = styled(BorderBoxStack)({
  flexDirection: "row",
});

export const BorderBoxColumnStack = styled(BorderBoxStack)({
  flexDirection: "column",
});

export const BorderBoxCenterColumnStack = styled(BorderBoxColumnStack)({
  justifyContent: "center",
  alignItems: "center",
});

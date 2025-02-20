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

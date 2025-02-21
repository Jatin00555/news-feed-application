import { ToggleElementType } from "./commonTypes";

export interface FilterState {
  query: string;
  category: ToggleElementType[];
  author: ToggleElementType[];
  source: ToggleElementType[];
}

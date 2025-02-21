import { ToggleElementType } from "./commonTypes";

export interface FilterState {
  query: string;
  category: ToggleElementType[];
  author: ToggleElementType[];
  source: ToggleElementType[];
  timeLine: ToggleElementType | null;
}

export interface APIQueryPayloads {
  query: string;
  category: string;
  author: string;
  from:string
  to:string
}

export interface ApplicationInfoState{
  authors:ToggleElementType[]
}

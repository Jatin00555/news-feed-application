import { useFetchNYTimesArticlesQuery } from "../services/nyTimesService";

const drawerWidth = 250;
const appBarHeight = 54;

const sourceAndQueryList = [
  {
    key: "nyTimes",
    fetchQuery: useFetchNYTimesArticlesQuery,
    label: "new_york_times",
  },
  {
    key: "newsApi",
    fetchQuery: useFetchNYTimesArticlesQuery,
    label: "news_org",
  },
  {
    key: "guardian",
    fetchQuery: useFetchNYTimesArticlesQuery,
    label: "the_guardian",
  },
];
export { drawerWidth, appBarHeight, sourceAndQueryList };

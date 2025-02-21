import i18n from "../translations/i18n";

const drawerWidth = 250;
const appBarHeight = 54;
const nyTimes = "nyTimes";
const newsApi = "newsApi";
const guardian = "guardian";

const sourceAndQueryList = [
  {
    key: nyTimes,
    label: i18n.t("new_york_times"),
  },
  {
    key: newsApi,
    label: i18n.t("news_org"),
  },
  {
    key: guardian,
    label: i18n.t("the_guardian"),
  },
];

const newsCategories = [
  { key: "politics", label: "Politics" },
  { key: "business", label: "Business" },
  { key: "technology", label: "Technology" },
  { key: "health", label: "Health" },
  { key: "science", label: "Science" },
  { key: "sports", label: "Sports" },
  { key: "entertainment", label: "Entertainment" },
  { key: "world", label: "World" },
];

export { drawerWidth, appBarHeight, sourceAndQueryList, newsCategories };

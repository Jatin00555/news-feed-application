import i18n from "../translations/i18n";
const { t } = i18n;

const drawerWidth = 250;
const appBarHeight = 54;
const nyTimes = "nyTimes";
const newsApi = "newsApi";
const guardian = "guardian";

const sourceAndQueryList = [
  {
    key: nyTimes,
    label: t("new_york_times"),
  },
  {
    key: newsApi,
    label: t("news_org"),
  },
  {
    key: guardian,
    label: t("the_guardian"),
  },
];

const newsCategories = [
  { key: "general", label: "General" },
  { key: "politics", label: "Politics" },
  { key: "business", label: "Business" },
  { key: "technology", label: "Technology" },
  { key: "health", label: "Health" },
  { key: "science", label: "Science" },
  { key: "sports", label: "Sports" },
  { key: "entertainment", label: "Entertainment" },
  { key: "world", label: "World News" },
];

const timeLineList = [
  { key: "today", label: t("today") },
  { key: "yesterday", label: t("yesterday") },
  { key: "week", label: t("this_week") },
  { key: "month", label: t("this_month") },
  { key: "all", label: t("all_time") },
];

const categoryMapping: { [key: string]: { [key: string]: string } } = {
  general: { [newsApi]: "general", [guardian]: "news", [nyTimes]: "News" },
  world: { [newsApi]: "world", [guardian]: "world", [nyTimes]: "World" },
  politics: {
    [newsApi]: "politics",
    [guardian]: "politics",
    [nyTimes]: "Politics",
  },
  business: {
    [newsApi]: "business",
    [guardian]: "business",
    [nyTimes]: "Business",
  },
  health: {
    [newsApi]: "health",
    [guardian]: "lifeandstyle",
    [nyTimes]: "Health",
  },
  entertainment: {
    [newsApi]: "entertainment",
    [guardian]: "culture",
    [nyTimes]: "Arts",
  },
  sports: { [newsApi]: "sports", [guardian]: "sport", [nyTimes]: "Sports" },
  science: {
    [newsApi]: "science",
    [guardian]: "science",
    [nyTimes]: "Science",
  },
  technology: {
    [newsApi]: "technology",
    [guardian]: "technology",
    [nyTimes]: "Technology",
  },
};

export {
  drawerWidth,
  appBarHeight,
  sourceAndQueryList,
  newsCategories,
  newsApi,
  nyTimes,
  guardian,
  timeLineList,
  categoryMapping,
};

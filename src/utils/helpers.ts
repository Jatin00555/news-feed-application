import { NewsArticleType } from "../types/commonTypes";
import { guardian, newsApi, nyTimes } from "./staticData";

export const getDateRange = (key: string): { from: string; to: string } => {
  const today = new Date();
  const to = today.toISOString().split("T")[0];

  const dateMap: Record<string, Date> = {
    today: today,
    yesterday: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - 1
    ),
    week: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7),
    month: new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()),
    all: new Date("2000-01-01"),
  };

  const from = dateMap[key]?.toISOString().split("T")[0] || to;
  return { from, to };
};

export const trimString = (str?: string | number) =>
  str?.toString()?.trim() || "";

const formatDate = (date?: string) =>
  date ? new Date(date).toDateString() : "";

const newsMappers: Record<string, (article: any) => NewsArticleType> = {
  [nyTimes]: (article) => ({
    id: article._id,
    sourceName: nyTimes,
    title: article.headline?.main || "No Title",
    subheader: formatDate(article.pub_date),
    imageUrl: article.multimedia?.[0]?.url
      ? `https://www.nytimes.com/${article.multimedia[0].url}`
      : "",
    description: article.abstract || "",
    avatarUrl: "src/assets/nytLogo.png",
  }),
  [newsApi]: (article) => ({
    id: article.url,
    sourceName: newsApi,
    title: article.title || "No Title",
    subheader: formatDate(article.publishedAt),
    imageUrl: article.urlToImage || "",
    description: article.description || "",
    avatarUrl: "src/assets/newsLogo.png",
    author: article.author,
  }),
  [guardian]: (article) => ({
    id: article.id,
    sourceName: guardian,
    title: article.webTitle,
    subheader: formatDate(article.webPublicationDate),
    imageUrl: "", // No image in The Guardian API
    description: "",
    avatarUrl: "src/assets/guardianLogo.png",
  }),
};

export const normalizeNewsData = (
  key: string,
  articles: any[]
): NewsArticleType[] => {
  return (
    articles?.map?.(
      (article) => newsMappers[key]?.(article) || createEmptyNewsArticle()
    ) || []
  );
};

const createEmptyNewsArticle = (): NewsArticleType => ({
  id: "",
  sourceName: "",
  title: "",
  subheader: "",
  imageUrl: "",
  description: "",
  avatarUrl: "",
});

export const sanitizeObject = (
  obj: Record<string, any>
): Record<string, any> => {
  if (!obj || typeof obj !== "object") return {};

  return Object.fromEntries(
    Object.entries(obj)
      .filter(
        ([_, value]) => value !== "" && value !== null && value !== undefined
      )
      .map(([key, value]) => [
        key,
        typeof value === "object" && !Array.isArray(value)
          ? sanitizeObject(value)
          : value,
      ])
  );
};

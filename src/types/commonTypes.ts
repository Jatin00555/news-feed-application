export interface ToggleElementType {
  key: string | number;
  label: string;
}

export interface NewsArticleType {
  id: string;
  sourceName: string;
  avatarUrl: string;
  title: string;
  subheader: string;
  imageUrl: string;
  description: string;
}

export interface ArticleKeyMapping {
  [key: string]: NewsArticleType;
}
export interface SourceCategoryMapType {
  newsapi: string;
  guardian: string;
  nytimes: string;
}

export interface NewsApiArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export type Article = {
  url: string;
  title: string;
  thumbnail_standard: string;
  abstract: string;
  byline: string;
  published_date: string;
  multimedia: {
    url: string;
    format: "Standard Thumbnail" | "mediumThreeByTwo210";
    height: number;
    width: number;
    caption: string;
    copyright: string;
  }[];
};

export type ArticlesStore = {
  articles: Article[];
  setArticles: (articles: Article[]) => void;
};

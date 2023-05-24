import { Article } from "../../home/types";

export type StackParamList = {
  HomeScreen: undefined;
  ArticleDetailScreen: {
    item: Article;
  };
};

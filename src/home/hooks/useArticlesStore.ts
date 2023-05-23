import { create } from "zustand";

type ArticlesStore = {
  articles: Article[];
  setArticles: (articles: Article[]) => void;
};

export type Article = {
  url: string;
  title: string;
};

const useArticlesStore = create<ArticlesStore>((set: any) => ({
  articles: [],
  setArticles: (articles) => set({ articles }),
}));

export default useArticlesStore;

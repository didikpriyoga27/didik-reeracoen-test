import { create } from "zustand";
import { ArticlesStore } from "../types";

const useArticlesStore = create<ArticlesStore>((set: any) => ({
  articles: [],
  setArticles: (articles) => set({ articles }),
}));

export default useArticlesStore;

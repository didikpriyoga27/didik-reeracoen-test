import { useQuery } from "@tanstack/react-query";
import useArticlesStore from "./useArticlesStore";
import Constants from "expo-constants";

export default function useGetArticles() {
  const setArticles = useArticlesStore((state) => state.setArticles);
  const apiKey = Constants?.expoConfig?.extra?.apiKey || "";

  const fetchArticles = async () => {
    const response = await fetch(
      `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${apiKey}`
    );

    const data = await response.json();
    return data.results;
  };

  const { isLoading, refetch, isRefetching } = useQuery(
    ["articles"],
    fetchArticles,
    {
      staleTime: 60 * 5 * 1000, // 5 minutes
      cacheTime: 60 * 15 * 1000, // 15 minutes
      onSuccess: (result) => {
        setArticles(result);
      },
    }
  );

  const articles = useArticlesStore((state) => state.articles);

  return { articles, isLoading, refetch, isRefetching };
}

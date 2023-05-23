import { useEffect, useState } from "react";
import useArticlesStore from "./useArticlesStore";
import Constants from "expo-constants";

export default function useGetArticles() {
  const setArticles = useArticlesStore((state) => state.setArticles);
  const apiKey = Constants?.expoConfig?.extra?.apiKey || "";

  const [isLoading, setIsLoading] = useState(false);

  const fetchArticles = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${apiKey}`
      );
      const data = await response.json();
      setArticles(data.results);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const articles = useArticlesStore((state) => state.articles);

  const refetch = () => fetchArticles();

  return { articles, isLoading, refetch };
}

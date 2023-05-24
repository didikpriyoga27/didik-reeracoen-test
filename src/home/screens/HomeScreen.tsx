import React, { useCallback } from "react";
import { FlatList, Image, Text, View } from "native-base";
import useGetArticles from "../hooks/useGetArticles";
import { ActivityIndicator, RefreshControl } from "react-native";
import ArticleItem from "../components/ArticleItem";
import { Article } from "../types";

export default function HomeScreen() {
  const { articles, isLoading, refetch, isRefetching } = useGetArticles();

  const renderItem = useCallback((props: { item: Article }) => {
    return <ArticleItem {...props} />;
  }, []);

  const ListHeaderComponent = useCallback(() => {
    return (
      <Text p={4} fontSize={"lg"} fontWeight={"bold"}>
        Latest Contents
      </Text>
    );
  }, []);

  if (isLoading) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <FlatList
      data={articles}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
      }
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}

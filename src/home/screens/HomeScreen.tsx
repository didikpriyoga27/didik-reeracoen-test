import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Text, View } from "native-base";
import { Article } from "../hooks/useArticlesStore";
import useGetArticles from "../hooks/useGetArticles";
import { ActivityIndicator, RefreshControl } from "react-native";
import ArticleItem from "../components/ArticleItem";

export default function HomeScreen() {
  const { articles, isLoading, refetch, isRefetching } = useGetArticles();

  const renderItem = useCallback((props: { item: Article }) => {
    return <ArticleItem {...props} />;
  }, []);

  const ListHeaderComponent = useCallback(() => {
    return (
      <Text p={4} fontSize={'lg'} fontWeight={"bold"}>
        Latest Contents
      </Text>
    );
  }, []);

  if (isLoading) {
    return <ActivityIndicator size={"large"} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={articles}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={isRefetching} onRefresh={refetch} />
        }
        ListHeaderComponent={ListHeaderComponent}
      />
    </SafeAreaView>
  );
}

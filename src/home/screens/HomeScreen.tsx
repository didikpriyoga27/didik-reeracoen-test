import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Text, View } from "native-base";
import { Article } from "../hooks/useArticlesStore";
import useGetArticles from "../hooks/useGetArticles";
import { ActivityIndicator, RefreshControl } from "react-native";

export default function HomeScreen() {
  const { articles, isLoading, refetch } = useGetArticles();

  const renderItem = useCallback(({ item }: { item: Article }) => {
    return <Text key={item.url}>{item.title}</Text>;
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <FlatList
          data={articles}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refetch} />
          }
        />
      )}
    </SafeAreaView>
  );
}

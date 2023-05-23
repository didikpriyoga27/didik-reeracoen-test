import React from "react";
import { Article } from "../hooks/useArticlesStore";
import { Box, HStack, Image, Pressable, Text, View } from "native-base";
import { useWindowDimensions } from "react-native";
import * as WebBrowser from "expo-web-browser";

type Props = {
  item: Article;
};

export default function ArticleItem({ item }: Props) {
  const { width } = useWindowDimensions();

  const cardHeight = width / 3;

  const handleArticlePress = async () => {
    await WebBrowser.openBrowserAsync(item.url);
  };

  return (
    <Pressable onPress={handleArticlePress}>
      <Box rounded={"sm"} shadow={2} m={4} mt={0} bg={"white"} h={cardHeight} key={item.url}>
        <HStack>
          <Image
            source={{ uri: item.thumbnail_standard }}
            style={{ width: cardHeight, aspectRatio: 1 }}
            alt={"Thumbnail"}
            rounded={"sm"}
            roundedRight={"none"}
          />
          <View flex={1} p={2} justifyContent={"space-between"}>
            <View>
              <Text numberOfLines={2} fontWeight={"bold"}>
                {item.title}
              </Text>
              <Text numberOfLines={2} fontSize={"xs"}>
                {item.abstract}
              </Text>
            </View>
            <Text numberOfLines={1} fontSize={"xs"}>
              {item.byline}
            </Text>
          </View>
        </HStack>
      </Box>
    </Pressable>
  );
}

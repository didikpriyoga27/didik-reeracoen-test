import React from "react";
import { Box, HStack, Image, Pressable, Text, View } from "native-base";
import { useWindowDimensions } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamList } from "../../utils/navigation/StackParamList";
import { Article } from "../types";
import useTranslateDate from "../../shared/hooks/useTranslateDate";

type Props = {
  item: Article;
};

export default function ArticleItem({ item }: Props) {
  const { width } = useWindowDimensions();
  const { translateDate } = useTranslateDate();
  const { navigate } = useNavigation<NavigationProp<StackParamList>>();

  const cardHeight = width / 3;

  const handleArticlePress = async () => {
    navigate("ArticleDetailScreen", { item });
  };

  return (
    <Pressable onPress={handleArticlePress}>
      <Box
        rounded={"sm"}
        shadow={2}
        m={4}
        mt={0}
        bg={"white"}
        h={cardHeight}
        key={item.url}
      >
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
              <Text fontSize={'xs'}>{translateDate(item.published_date)}</Text>
              <Text numberOfLines={2} fontWeight={"bold"}>
                {item.title}
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

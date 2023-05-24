import React, { useLayoutEffect } from "react";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { StackParamList } from "../../utils/navigation/StackParamList";
import { Button, Image, ScrollView, Text, View } from "native-base";
import { useWindowDimensions } from "react-native";
import useTranslateDate from "../../shared/hooks/useTranslateDate";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";

export default function ArticleDetailScreen() {
  const { setOptions } = useNavigation<NavigationProp<StackParamList>>();
  const { params } =
    useRoute<RouteProp<StackParamList, "ArticleDetailScreen">>();
  const { item } = params;
  const { width } = useWindowDimensions();
  const { translateDate } = useTranslateDate();
  const { bottom } = useSafeAreaInsets();

  const imageMedia = item?.multimedia?.filter((media) => {
    return media.format === "mediumThreeByTwo210";
  })?.[0] ?? {};

  const handleSeeDetails = async () => {
    await WebBrowser.openBrowserAsync(item.url);
  };

  useLayoutEffect(() => {
    setOptions({ title: item.title.slice(0, 20) });
  });

  return (
    <View flex={1}>
      <ScrollView p={4}>
        <Text fontWeight={"bold"} fontStyle={"italic"} fontSize={"2xl"}>
          {item.title}
        </Text>
        <Text>Published Date: {translateDate(item?.published_date)}</Text>
        <Text fontSize={"md"} my={3} textAlign={"justify"}>
          {item.abstract}
        </Text>
        <Image
          src={imageMedia?.url}
          style={{ aspectRatio: imageMedia?.width / imageMedia?.height }}
          width={width - 32}
          rounded={"md"}
          alt={"imageMedia"}
        />
        <Text fontStyle={"italic"}>
          {imageMedia?.caption} {`(©: ${imageMedia?.copyright})`}
        </Text>
      </ScrollView>
      <Button onPress={handleSeeDetails} bottom={bottom + 4} p={4} m={4}>
        <Text color={"white"} fontWeight={"bold"}>
          See Details
        </Text>
      </Button>
    </View>
  );
}

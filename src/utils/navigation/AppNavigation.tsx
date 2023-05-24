import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "./StackParamList";
import HomeScreen from "../../home/screens/HomeScreen";
import ArticleDetailScreen from "../../articles/screens/ArticleDetailScreen";

export default function AppNavigation() {
  const Stack = createNativeStackNavigator<StackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "New York Times" }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ title: "" }}
          name="ArticleDetailScreen"
          component={ArticleDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

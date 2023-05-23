import { NativeBaseProvider } from "native-base";
import React from "react";
import HomeScreen from "./home/screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function AppContainer() {
  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <HomeScreen />
        <StatusBar style="dark" />
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

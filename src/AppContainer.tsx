import React from "react";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppNavigation from "./utils/navigation/AppNavigation";

export default function AppContainer() {
  const queryClient = new QueryClient();

  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <StatusBar style="dark" />
          <AppNavigation />
        </QueryClientProvider>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}

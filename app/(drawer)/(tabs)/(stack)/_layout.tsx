import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { Stack, useNavigation, useRouter } from "expo-router";
import React from "react";

const StackLayout = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const onHeaderLeft = (canGoBack: boolean | undefined) => {
    if (canGoBack) {
      // router.replace("/home");
      router.back();
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            className="mr-5"
            name={canGoBack ? "arrow-back" : "grid-outline"}
            size={20}
            onPress={() => onHeaderLeft(canGoBack)}
          />
        ),
      }}>
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home Screen",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Product Screen",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Profile Screen",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Settings Screen",
        }}
      />
    </Stack>
  );
};

export default StackLayout;

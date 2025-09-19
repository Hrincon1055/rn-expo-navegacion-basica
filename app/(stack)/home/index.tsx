import { Link, router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/shared/CustomButton";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="px-10">
        <CustomButton
          onPress={() => router.push("/products")}
          color="primary"
          className="mb-2">
          Producto
        </CustomButton>

        <CustomButton
          onPress={() => router.push("/profile")}
          className="mb-2"
          color="secondary">
          Profile
        </CustomButton>

        <CustomButton
          onPress={() => router.push("/settings")}
          className="mb-2"
          color="tertiary">
          Settings
        </CustomButton>

        <Link href="/products" asChild>
          <CustomButton color="primary" className="mb-10" variant="text-only">
            Producto
          </CustomButton>
        </Link>
        {/* <Text>Home</Text>
        <Link className="mb-4" href="/products">
          Products
        </Link>
        <Link className="mb-4" href="/profile">
          profile
        </Link>
        <Link className="mb-4" href="/settings">
          settings
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

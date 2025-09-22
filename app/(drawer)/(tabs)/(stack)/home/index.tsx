import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();
  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <View className="px-5 pt-2">
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

      <CustomButton onPress={onToggleDrawer}>Abrir Menú</CustomButton>
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
  );
};

export default HomeScreen;

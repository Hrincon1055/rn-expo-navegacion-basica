import { products } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const ProdutScreen = () => {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const product = products.find((p) => p.id === id);
  console.log("[id] LINE 10 =>", product);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text className="font-work-black text-2xl">{product?.title}</Text>
      ),
    });
  }, [navigation, product?.title]);

  if (!product) return <Redirect href="/" />;
  return (
    <View className="px-5 mt-2">
      <Text className="font-work-black text-2xl">{product.title}</Text>
      <Text className="font-work-light">{product.description}</Text>
      <Text className="font-work-black ">{product.price}</Text>
    </View>
  );
};

export default ProdutScreen;

import { products } from "@/store/products.store";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";

const ProdutsScreen = () => {
  return (
    <View className="flex flex-1 px-2">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="px-5">
            <Text className="text-2xl font-work-black">{item.title}</Text>
            <Text className="">{item.description}</Text>
            <View className="flex flex-row justify-between mt-2">
              <Text className="font-work-black">{item.price}</Text>
              <Link href={`/products/${item.id}`} className="text-primary">
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProdutsScreen;

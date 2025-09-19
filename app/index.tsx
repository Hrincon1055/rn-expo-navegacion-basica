import { Redirect } from "expo-router";
import React from "react";

export default function App() {
  return <Redirect href="/(stack)/home" />;
  // return (
  //   <SafeAreaView style={{ flex: 1 }}>
  //     <View className="mt-6 mx-2.5">
  //       <Text className="text-3xl" style={{ fontFamily: "WorkSans-Black" }}>
  //         Welcome to Nativewind!
  //       </Text>
  //       <Text className="text-3xl font-work-black text-primary">
  //         Welcome to Nativewind!
  //       </Text>
  //       <Text className="text-3xl font-work-black text-secondary">
  //         Welcome to Nativewind!
  //       </Text>
  //       <Text className="text-3xl font-work-black text-secondary-100">
  //         Welcome to Nativewind!
  //       </Text>
  //       <Text className="text-3xl font-work-black text-tertiary">
  //         Welcome to Nativewind!
  //       </Text>
  //     </View>
  //     <Link href="/products">Products</Link>
  //   </SafeAreaView>
  // );
}

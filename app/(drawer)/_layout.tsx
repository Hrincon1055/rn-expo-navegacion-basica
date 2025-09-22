import CustonDrawer from "@/components/shared/CustonDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import React from "react";
const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustonDrawer}
      screenOptions={{
        // headerShown: false,
        overlayColor: "rgba(0,0,0,0.4)",
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: "white",
        },
      }}>
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: "Usuario",
          title: "Usuario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          drawerLabel: "Tabs + Stack",
          title: "Tabs + Stack",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: "Horario",
          title: "Horarios",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;

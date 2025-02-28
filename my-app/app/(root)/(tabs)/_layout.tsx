import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "white",
        position: "absolute",
        borderTopColor: "#000000",
        borderTopWidth: 1,
        minHeight: 60,
      },
    }}>
      <Text>Tabs</Text>
    </Tabs>
  );
};

export default TabsLayout;

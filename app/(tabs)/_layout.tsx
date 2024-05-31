import { Tabs } from "expo-router";
import React from "react";

import { Header } from "@/components/Header";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        header: (args) => <Header {...args} />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "News",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
        }}
      />
    </Tabs>
  );
}

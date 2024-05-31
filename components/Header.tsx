import { View, Text, StyleSheet } from "react-native";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";

export const headerTitle: Record<string, string> = {
  index: "News list",
  profile: "My profile",
};

export function Header({ route }: BottomTabHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{headerTitle[route.name]}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#fff",
    gap: 20,
  },
});

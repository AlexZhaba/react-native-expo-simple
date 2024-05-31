import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export function Search() {
  return (
    <View style={styles.container}>
      <Text>Поиск</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} />
        <Button title="Найти"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    flex: 1,
  },
  container: {
    display: "flex",
    gap: 10,
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});

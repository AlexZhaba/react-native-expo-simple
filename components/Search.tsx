import { Button, StyleSheet, Text, TextInput, View } from "react-native";

interface SearchProps {
  loading: boolean;
}

export function Search({ loading }: SearchProps) {
  return (
    <View style={styles.container}>
      <Text>Поиск</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} />
        <Button title="Найти" disabled={loading}></Button>
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

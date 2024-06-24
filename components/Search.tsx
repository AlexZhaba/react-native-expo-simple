import { Button, StyleSheet, Text, TextInput, View } from "react-native";

interface SearchProps {
  loading: boolean;
  onChangeText: (text: string) => void;
}

export function Search({ loading, onChangeText }: SearchProps) {
  return (
    <View style={styles.container}>
      <Text>Поиск</Text>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} onChangeText={onChangeText} />
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
    borderRadius: 10,
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

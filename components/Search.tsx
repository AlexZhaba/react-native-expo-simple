import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ButtonWithLoader } from "./button-with-loader";
import { useState } from "react";

interface SearchProps {
  loading: boolean;
  onPress: (text: string) => void;
}

export function Search({ loading, onPress }: SearchProps) {
  const [text, setText] = useState('')
  return (
    <View style={styles.wrapper}>
      <Text>Find new articles:</Text>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput style={styles.input} onChangeText={setText} value={text} onSubmitEditing={() => onPress(text)} />
        </View>
        <View style={styles.button}>
          <ButtonWithLoader isLoading={loading} onPress={() => onPress(text)}>
            Find
          </ButtonWithLoader>
        </View>
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
    flexDirection: 'row',
    gap: 10,
  },
  wrapper: {
    display: "flex",
    gap: 10,
  },
  searchContainer: {
    display: "flex",
    flexDirection: 'row',
    flex: 1,
    gap: 10,
  },
  button: {
    width: 75
  }
});

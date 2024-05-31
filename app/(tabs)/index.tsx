import { Text, View, TextInput, StyleSheet } from "react-native";
import { Search } from "@/components/Search";
import { NewsList, NewsProps } from "@/components/NewsList";

export default function Index() {
  const newsData: NewsProps[] = [
    {
      id: "1",
      title: "Title #1",
      description: "Descrtipion #1",
      date: new Date(),
    },
    {
      id: "2",
      title: "Title #2",
      description: "Descrtipion #2",
      date: new Date(),
    },
    {
      id: "3",
      title: "Title #3",
      description: "Descrtipion #3",
      date: new Date(),
    },
    {
      id: "4",
      title: "Title #4",
      description: "Descrtipion #4",
      date: new Date(),
    },
  ];
  return (
    <View style={styles.container}>
      <Search />
      <NewsList data={newsData} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

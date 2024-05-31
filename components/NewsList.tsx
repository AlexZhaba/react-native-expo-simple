import { useMemo } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

export function NewsList({ data }: { data: NewsProps[] }) {
  const flatListData = useMemo(
    () =>
      data.map((data) => ({
        ...data,
        key: data.id,
      })),
    []
  );
  return (
    <View>
      <FlatList
        data={flatListData}
        renderItem={(args) => <NewsItem {...args.item} />}
      />
    </View>
  );
}

export interface NewsProps {
  id: string;
  title: string;
  description: string;
  date: Date;
}

export function NewsItem({ title, description, date }: NewsProps) {
  return (
    <View style={styles.newsItem}>
      <Text style={styles.newsTitle}>{title}</Text>
      <Text>{description}</Text>
      <Text>{date.toISOString()}</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  newsItem: {
    marginVertical: 10,
    display: "flex",
    gap: 10,
    backgroundColor: "#fff",
    padding: 10,
  },
  newsTitle: {
    fontSize: 16,
  },
});

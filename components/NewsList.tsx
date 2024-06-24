import { useMemo } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

export function NewsList({ data }: { data: NewsProps[] }) {
  const flatListData = useMemo(
    () =>
      data.map((data) => ({
        ...data,
        key: data.id,
      })),
    [data]
  );
  return (
    <View>
      <FlatList
        data={flatListData}
        renderItem={(args) => <NewsItem {...args.item} />}
        scrollEnabled={true}
      />
    </View>
  );
}

export interface NewsProps {
  id: number;
  title: string;
  summary: string;
  published_at: string;
}

export function NewsItem({ title, summary, published_at }: NewsProps) {
  return (
    <View style={styles.newsItem}>
      <Text style={styles.newsTitle}>{title}</Text>
      <Text>{summary}</Text>
      <Text>{published_at}</Text>
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

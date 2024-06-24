import React, { useMemo } from "react";
import { FlatList, View, Text, StyleSheet, Image } from "react-native";
import { ButtonWithLoader } from "./button-with-loader";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export function NewsList({ data, children }: { data: NewsProps[], children: React.ReactNode }) {
  const flatListData = useMemo(
    () =>
      data.map((data) => ({
        ...data,
        key: data.id,
      })),
    [data]
  );
  return (
    <View style={styles.list}>
      <FlatList<any>
        data={[...flatListData, { id: 123123123 }]}
        renderItem={(args) => args.item.id === 123123123 ? children as any : <NewsItem {...args.item} />}
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
  image_url: string;
}

export function NewsItem({ title, summary, published_at, image_url }: NewsProps) {
  console.log('image_url', image_url)
  return (
    <View style={styles.newsItem}>
      <Text style={styles.newsTitle}>{title}</Text>
      <Image style={styles.previewImage} source={{
        uri: image_url
      }} />
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
  previewImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  list: {
    paddingBottom: 80,
  }
});

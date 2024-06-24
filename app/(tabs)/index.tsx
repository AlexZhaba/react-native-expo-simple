import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Search } from "@/components/Search";
import { NewsList } from "@/components/NewsList";
import { useNews } from "@/hooks/useNews";

export default function Index() {
  const { news, isLoading, error } = useNews();

  console.log('news', news)

  return (
    <View style={styles.container}>
      <Search loading={isLoading} />
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <NewsList data={news} />
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%'
  },
  loaderContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

import { View, StyleSheet, ActivityIndicator } from "react-native";
import _ from 'lodash';

import { Search } from "@/components/Search";
import { NewsList } from "@/components/NewsList";
import { useNews } from "@/hooks/useNews";
import { ButtonWithLoader } from "@/components/button-with-loader";

export default function Index() {
  const { news, isLoading, isNextLoading, search, next, hasNext } = useNews();

  const handleTextInput = (text: string) => {
    search(text)
  };

  return (
    <View style={styles.container}>
      <Search loading={isLoading} onPress={handleTextInput} />
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) :
        hasNext ? (<NewsList data={news} >
          <ButtonWithLoader onPress={next} isLoading={isNextLoading}>
            Load more news
          </ButtonWithLoader>
        </NewsList>) : (
          <NewsList data={news} />
        )}
    </View >
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 0,
    height: '100%',
  },
  loaderContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

import { getNewsListUrl } from "@/utils/news";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Platform, ToastAndroid } from "react-native";

const baseUrl = "https://api.spaceflightnewsapi.net/v4/articles";

interface News {
  id: number;
  title: string;
  url: string;
  image_url: string;
  summary: string;
  published_at: string;
}

interface NewsResult {
  results: News[];
  next: string;
}

export const useNews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState<News[]>([]);
  const [nextNewsUrl, setNextNewsUrl] = useState<string | null>(null);
  const [isNextLoading, setIsNextLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const addNews = (newNews: News[]) => {
    const notValidatedNews = [...news, ...newNews];
    setNews(notValidatedNews);
  };

  const getNews = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(getNewsListUrl(10, 10));
      const data = (await response.json()) as NewsResult;
      setNews(data.results);
      setNextNewsUrl(data.next);
    } catch (cause) {
      const message = "Getting news was failed";
      console.log(new Error(message, { cause }));
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading]);

  const search = useCallback(
    async (searchString: string) => {
      try {
        setIsLoading(true);
        const response = await fetch(getNewsListUrl(10, 0, searchString));
        const data = (await response.json()) as NewsResult;
        setNews(data.results);
        setNextNewsUrl(data.next);
      } catch (cause) {
        const message = "Getting news was failed";
        console.log(new Error(message, { cause }));
        setError(message);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading]
  );

  const next = useCallback(async () => {
    if (!nextNewsUrl) {
      throw new Error("test");
    }

    try {
      setIsNextLoading(true);
      const response = await fetch(nextNewsUrl);
      const data = (await response.json()) as NewsResult;
      addNews(data.results);
      setNextNewsUrl(data.next);
    } catch (cause) {
      setError("Getting more news was failed");
    } finally {
      setIsNextLoading(false);
    }
  }, [nextNewsUrl]);

  useEffect(() => {
    getNews();
  }, [getNews]);

  useEffect(() => {
    if (!error) return;

    if (Platform.OS === "android") {
      ToastAndroid.showWithGravityAndOffset(
        error,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
    }
  }, [error]);

  const hasNext = useMemo(() => Boolean(nextNewsUrl), [nextNewsUrl]);

  return { isLoading, news, error, search, next, isNextLoading, hasNext };
};

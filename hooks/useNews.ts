import { useCallback, useEffect, useState } from "react";

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
}

const getNewsListUrl = (limit: number, offset: number) => {
  const newsUrl = "https://api.spaceflightnewsapi.net/v4/articles/?";

  const searchParams = new URLSearchParams();
  searchParams.append("limit", String(limit));
  searchParams.append("offset", String(offset));

  return `${newsUrl}${searchParams.toString()}`;
};

export const useNews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState<News[]>([]);
  const [error, setError] = useState<null | string>(null);

  const getNews = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/?limit=10&offset=10`
      );
      const data = (await response.json()) as NewsResult;
      setNews(data.results);
    } catch (cause) {
      const message = "Getting news was failed";
      console.log(new Error(message, { cause }));
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading]);

  useEffect(() => {
    getNews();
  }, [getNews]);

  return { isLoading, news, error };
};

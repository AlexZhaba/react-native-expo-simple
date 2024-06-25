export const getNewsListUrl = (
  limit: number,
  offset?: number,
  search?: string
) => {
  const newsUrl = "https://api.spaceflightnewsapi.net/v4/articles/?";

  const searchParams = new URLSearchParams();
  searchParams.append("limit", String(limit));

  if (offset) {
    searchParams.append("offset", String(offset));
  }
  if (search) {
    searchParams.append("search", search);
  }

  return `${newsUrl}${searchParams.toString()}`;
};

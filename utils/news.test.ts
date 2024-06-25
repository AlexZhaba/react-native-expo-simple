import { getNewsListUrl } from "./news";

const newsUrl = "https://api.spaceflightnewsapi.net/v4/articles/?";

describe("Creating news url endpoint for api", () => {
  it("should add required params as query param", () => {
    expect(getNewsListUrl(10)).toBe(`${newsUrl}limit=10`);
  });

  it("should add optional params as query param", () => {
    expect(getNewsListUrl(10, 12)).toBe(`${newsUrl}limit=10&offset=12`);
    expect(getNewsListUrl(10, undefined, "test")).toBe(
      `${newsUrl}limit=10&search=test`
    );
  });
});

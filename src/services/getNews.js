import { API_URL, API_KEY, NEWS_LANGUAGE, PAGE_SIZE } from "../constants";

export const getNews = async (term) => {
  try {
    const response = await fetch(
      `${API_URL}?q=${term}&apiKey=${API_KEY}&pageSize=${PAGE_SIZE}&language=${NEWS_LANGUAGE}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    return { isError: true };
  }
};

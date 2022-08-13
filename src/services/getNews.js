import { API_URL, API_KEY, NEWS_LANGUAGE, PAGE_SIZE } from "../constants";

export const getNews = async (term, page = 1) => {
  try {
    const response = await fetch(
      `${API_URL}?q=${term}&apiKey=${API_KEY}&page=${page}&pageSize=${PAGE_SIZE}&language=${NEWS_LANGUAGE}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    return { isError: true };
  }
};

import { API_URL, API_KEY } from "../constants";

export const getNews = async (term) => {
  try {
    const response = await fetch(`${API_URL}?q=${term}&apiKey=${API_KEY}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return { isError: true };
  }
};

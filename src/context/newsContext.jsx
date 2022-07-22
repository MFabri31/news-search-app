import { createContext, useEffect, useState } from "react";
import { getNews } from "../services/getNews";

export const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [term, setTerm] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(null);

  const getTerm = (term) => setTerm(term);

  const getData = async (term) => {
    if (term) {
      setLoading(true);
      const data = await getNews(term);

      const { articles } = data;

      setNews(articles);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(term);
  }, [term]);

  return (
    <NewsContext.Provider value={{ news, loading, getTerm }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;

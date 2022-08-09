import { createContext, useEffect, useState } from "react";
import { getNews } from "../services/getNews";

export const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [term, setTerm] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

  const getTerm = (term) => setTerm(term);

  const getData = async (term) => {
    if (term) {
      setLoading(true);
      const data = await getNews(term);

      const { articles, totalResults } = data;

      setNews(articles);
      setTotalResults(totalResults);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(term);
  }, [term]);

  return (
    <NewsContext.Provider value={{ news, loading, getTerm, totalResults }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;

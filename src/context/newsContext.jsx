import { createContext, useEffect, useState } from "react";
import { getNews } from "../services/getNews";

export const NewsContext = createContext();

const NewsProvider = ({ children }) => {
  const [term, setTerm] = useState("");
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getTerm = (term) => setTerm(term);

  const onChangePage = (page) => {
    setCurrentPage(page);
  };

  const getData = async (term, page) => {
    if (term || page) {
      setLoading(true);
      const data = await getNews(term, page);

      const { articles, totalResults } = data;

      setNews(articles);
      setTotalResults(totalResults);

      const totalPages = Math.ceil(parseInt(totalResults / 10));

      setTotalPages(totalPages);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(term, currentPage);
  }, [term, currentPage]);

  return (
    <NewsContext.Provider
      value={{
        news,
        loading,
        getTerm,
        totalResults,
        onChangePage,
        setCurrentPage,
        currentPage,
        totalPages,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsProvider;

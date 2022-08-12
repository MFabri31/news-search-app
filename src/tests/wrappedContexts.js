import NewsProvider from "../context/newsContext";

const renderWithNewsContext = (children) => {
  return <NewsProvider>{children}</NewsProvider>;
};

export default renderWithNewsContext;

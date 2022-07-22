import PublicRoutes from "./routes/PublicRoutes";
import NewsProvider from "./context/newsContext";

const App = () => {
  return (
    <>
      <NewsProvider>
        <PublicRoutes />
      </NewsProvider>
    </>
  );
};

export default App;

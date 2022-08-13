import { useContext } from "react";
import Pagination from "react-bootstrap/Pagination";
import { NewsContext } from "../../context/newsContext";

const MyPagination = () => {
  const { currentPage, totalPages, onChangePage, setCurrentPage } =
    useContext(NewsContext);

  let items = [];

  for (let page = 1; page <= 5; page++) {
    items.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        onClick={() => onChangePage(number)}
      >
        {page}
      </Pagination.Item>
    );
  }

  const nextPage = () => {
    if (currentPage !== totalPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <Pagination className="d-flex justify-content-center">
      <Pagination.Prev onClick={prevPage} />
      {items}
      <Pagination.Next onClick={nextPage} />
      <Pagination.Ellipsis />
      <Pagination.Item>{totalPages}</Pagination.Item>
    </Pagination>
  );
};

export default MyPagination;

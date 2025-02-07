import Pagination from "react-bootstrap/Pagination";
import { useNewsContext } from "../../hooks/useNewsContext";

const MyPagination = () => {
  const { currentPage, totalPages, onChangePage } = useNewsContext();

  let items = [];

  for (let page = 1; page <= 5; page++) {
    items.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        onClick={() => onChangePage(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  const nextPage = () => {
    if (currentPage !== totalPages) onChangePage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) onChangePage(currentPage - 1);
  };

  return (
    <Pagination className="d-flex justify-content-center" size="lg">
      <Pagination.Prev onClick={prevPage} />
      {items}
      <Pagination.Next onClick={nextPage} />
      <Pagination.Ellipsis />
      <Pagination.Item>{totalPages}</Pagination.Item>
    </Pagination>
  );
};

export default MyPagination;

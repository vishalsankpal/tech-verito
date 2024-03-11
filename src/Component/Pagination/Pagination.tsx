import React from "react";
import { useContext } from "react";
import { DataContext } from "../../Contexts/DataContext";
import "./Pagination.scss";
const Pagination = () => {
  const { data, currentPage, itemsPerPage, setCurrentPage } =
    useContext(DataContext);
  const lastPage: boolean = currentPage === data.length / itemsPerPage;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="pagination-wrapper">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous page
      </button>
      <p>{currentPage}</p>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={lastPage}
      >
        next page
      </button>
    </div>
  );
};

export default Pagination;

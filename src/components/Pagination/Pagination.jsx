import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.css";

const Pagination = ({ items, itemsPerPage, renderItems }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    setItemOffset(0);
  }, [items]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
    document.querySelector("#donation").scrollIntoView();
  };

  return (
    <>
      {renderItems(currentItems)}
      {pageCount > 1 && (
        <ReactPaginate
          className="react-paginate mt-5"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      )}
    </>
  );
};

export default Pagination;

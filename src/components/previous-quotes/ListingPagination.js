import React, { useContext } from "react";
import QuotesContext from "contexts/QuotesContext";
import fetchPreviousQuotesData from "helpers/fetchPreviousQuotesData";
import ReactPaginate from "react-paginate";
import { isMobile } from "react-device-detect";

function ListingPagination() {
  const { dispatch, paginationMeta, filterQuery } = useContext(QuotesContext);
  const { last_page: pageCount, current_page: currentPage } = paginationMeta;
  const pageRangeToDisplay = isMobile ? 3 : 6;

  const handlePaginationLinkClick = (data) => {
    const { selected: page } = data;
    const params = { ...filterQuery, page: page + 1 };

    fetchPreviousQuotesData(params, dispatch);
  };

  return (
    <section className="flex justify-center items-center h-20">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        disableInitialCallback={true}
        initialPage={0}
        forcePage={currentPage - 1}
        marginPagesDisplayed={1}
        pageRangeDisplayed={pageRangeToDisplay}
        onPageChange={handlePaginationLinkClick}
        activeClassName={"active"}
        containerClassName={
          "pagination flex justify-center items-center border-2 border-gray-400 rounded h-10"
        }
        disabledClassName={"disabled"}
      />
    </section>
  );
}

export default ListingPagination;

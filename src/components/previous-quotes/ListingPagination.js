import React, { useContext } from "react";
import QuotesContext from "contexts/QuotesContext";
import fetchPreviousQuotesData from "helpers/fetchPreviousQuotesData";
import ReactPaginate from "react-paginate";

function ListingPagination() {
  const { dispatch, paginationMeta, filterQuery } = useContext(QuotesContext);
  const { last_page: pageCount } = paginationMeta;
  const apiEndpoint =
    process.env.REACT_APP_API_ENDPOINT_PREVIOUS_QUOTES_LISTING;

  const handlePaginationLinkClick = (data) => {
    const { selected: page } = data;
    const params = { ...filterQuery, page: page + 1 };

    fetchPreviousQuotesData(apiEndpoint, params, dispatch);
  };

  return (
    <section className="flex justify-center items-center h-20">
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={pageCount}
        disableInitialCallback={true}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
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

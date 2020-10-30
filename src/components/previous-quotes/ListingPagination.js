import React, { useContext } from "react";
import QuotesContext from "contexts/QuotesContext";
import { getApiClient } from "hooks/ApiReducerClient";
import ReactPaginate from "react-paginate";
import { isMobile } from "react-device-detect";
import { trackPromise } from "react-promise-tracker";

function ListingPagination() {
  const { paginationMeta } = useContext(QuotesContext);
  const { last_page: pageCount, current_page: currentPage } = paginationMeta;
  const pageRangeToDisplay = isMobile ? 3 : 6;
  const apiClient = getApiClient();

  const handlePaginationLinkClick = (data) => {
    const { selected: page } = data;
    apiClient.setFilterParam("page", page + 1);

    trackPromise(apiClient.fetchData());
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
          "pagination flex justify-center items-center border-2 border-mako-300 hover:border-mako-400 rounded h-10"
        }
        disabledClassName={"disabled"}
      />
    </section>
  );
}

export default ListingPagination;

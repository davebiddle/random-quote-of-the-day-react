import React, { useContext } from "react";
import QuotesContext from "contexts/QuotesContext";
import fetchPreviousQuotesData from "helpers/fetchPreviousQuotesData";
import ReactPaginate from "react-paginate";

function ListingPagination() {
  const { dispatch, paginationMeta } = useContext(QuotesContext);
  const { last_page: pageCount } = paginationMeta;

  const handlePaginationLinkClick = (data) => {
    let { selected: page } = data;
    page += 1;

    fetchPreviousQuotesData(`api/quotes?page=${page}`, dispatch);
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
    // <section className="flex justify-center items-center h-20">
    //   <ul className="pagination flex justify-center items-center border-2 border-gray-400 rounded h-10">
    //     <li>
    //       <a className="disabled" href="#">
    //         &lt;&lt;
    //       </a>
    //     </li>
    //     <li>
    //       <a className="disabled" href="#">
    //         &lt;
    //       </a>
    //     </li>
    //     <li>
    //       <a className="active" href="#">
    //         1
    //       </a>
    //     </li>
    //     <li>
    //       <a href="#">&hellip;</a>
    //     </li>
    //     <li>
    //       <a href="#">29</a>
    //     </li>
    //     <li>
    //       <a href="#">30</a>
    //     </li>
    //     <li>
    //       <a href="#">&hellip;</a>
    //     </li>
    //     <li>
    //       <a href="#">101</a>
    //     </li>
    //     <li>
    //       <a href="#">&gt;</a>
    //     </li>
    //     <li>
    //       <a href="#">&gt;&gt;</a>
    //     </li>
    //   </ul>
    // </section>
  );
}

export default ListingPagination;

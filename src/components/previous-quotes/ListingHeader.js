import React, { useContext } from "react";
import QuotesContext from "contexts/QuotesContext";
import fetchPreviousQuotesData from "helpers/fetchPreviousQuotesData";
import { trackPromise } from "react-promise-tracker";
import SvgIconSelectDown from "components/svg/SvgIconSelectDown";

const ListingHeader = () => {
  const { dispatch, filterQuery, paginationMeta } = useContext(QuotesContext);
  const { from, to, total } = paginationMeta;
  const perPageValue = paginationMeta.per_page
    ? paginationMeta.per_page
    : filterQuery.per_page;
  const orderValue = paginationMeta.order
    ? paginationMeta.order
    : filterQuery.order;

  return (
    <header className="px-4 sm:px-8 md:px-10 py-2 md:h-16 lg:h-20 text-mako-600 text-sm italic sm:flex sm:justify-between sm:items-center lg:items-end lg:pl-0 lg:pt-0 lg:pb-4">
      <p className="mb-2 sm:mb-0 md:mt-7">{`Showing ${from}-${to} of ${total} quotes`}</p>
      <div className="md:flex md:justify-end">
        <div className="pr-4 mb-2 md:mb-0">
          <label for="select-per-page">Per page:</label>
          <div className="inline-block relative w-24 ml-4">
            <select
              id="select-per-page"
              name="select-per-page"
              value={perPageValue}
              onChange={(event) => {
                const params = { ...filterQuery, per_page: event.target.value };

                trackPromise(fetchPreviousQuotesData(params, dispatch));
              }}
              className="appearance-none w-full bg-white border-2 border-mako-300 hover:border-mako-400 rounded px-4 py-1 pr-8 focus:outline-none focus:shadow-outline"
            >
              {[5, 10, 15, 20, 25, 30].map((perPage, index) => {
                return (
                  <option key={index} value={perPage}>
                    {perPage}
                  </option>
                );
              })}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex justify-center items-center border-l-2 border-gray-400 w-10">
              <SvgIconSelectDown />
            </div>
          </div>
        </div>
        <div>
          <label for="select-order">Order by:</label>
          <div className="inline-block relative w-48 ml-4">
            <select
              id="select-order"
              name="select-order"
              value={orderValue}
              onChange={(event) => {
                const params = { ...filterQuery, order: event.target.value };

                trackPromise(fetchPreviousQuotesData(params, dispatch));
              }}
              className="appearance-none w-full bg-white border-2 border-mako-300 hover:border-mako-400 rounded px-4 py-1 pr-8 focus:outline-none focus:shadow-outline"
            >
              <option value="desc">Date (Newest first)</option>
              <option value="asc">Date (Oldest first)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex justify-center items-center border-l-2 border-mako-300 w-10">
              <SvgIconSelectDown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ListingHeader;

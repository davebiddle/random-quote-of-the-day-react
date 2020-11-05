import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import icon_calendar_blue from "assets/img/icon-calendar-blue.svg";
import icon_calendar_orange from "assets/img/icon-calendar-orange.svg";
import AjaxLoadingSpinner from "components/ajax/AjaxLoadingSpinner";
import AjaxError from "components/ajax/AjaxError";
import useFetchQuotesData from "hooks/FetchQuotesData";

const PreviousQuotesBlock = () => {
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT_PREVIOUS_QUOTES_BLOCK;
  const {
    error,
    isLoaded,
    responseState: previousQuotes,
    fetchData,
  } = useFetchQuotesData(apiEndpoint, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (error) {
    return <AjaxError ajaxError={error} />;
  } else if (!isLoaded) {
    return <AjaxLoadingSpinner />;
  } else {
    return (
      <div>
        <section className="flourish-genoa-bg px-5 pt-4 pb-16 sm:px-14 sm:pt-10">
          <h3 className="heading-flourish heading-flourish-after sm:heading-flourish-both text-white sm:text-3xl md:text-4xl sm:text-center sm:mb-10">
            Previous Quotes
          </h3>
          <ul className="previous-quotes-block-panel mt-3 text-astronaut-blue lg:flex lg:justify-between lg:space-x-8 xl:w-10/12 mx-auto">
            {previousQuotes.map((quote, index) => {
              const {
                id: quoteId = index, // index will only be used on first page load, prior to AJAX response
                dateFormatted = "",
                quoteContent = "",
                quoteLink = "",
                author: { authorName = "" } = {},
              } = quote;

              return (
                <li key={quoteId}>
                  <a target="_blank;" href={quoteLink}>
                    <h6>
                      <span className="icon-calendar-blue">
                        <img
                          src={icon_calendar_blue}
                          alt="Blue calendar icon"
                        />
                      </span>
                      <span className="icon-calendar-orange">
                        <img
                          src={icon_calendar_orange}
                          alt="Orange calendar icon"
                        />
                      </span>
                      {dateFormatted}
                    </h6>
                    <blockquote>
                      <p>{`"${quoteContent}"`}</p>
                    </blockquote>
                    <footer>{authorName}</footer>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="bg-genoa h-48 flex justify-center lg:justify-end items-center lg:pr-24 xl:pr-64">
          <Link
            className="text-astronaut-blue hover:text-genoa px-8 py-4 bg-neon-carrot-lighter hover:bg-white rounded sm:text-lg"
            to="/previous-quotes"
          >
            See all previous quotes
          </Link>
        </section>
      </div>
    );
  }
};

export default PreviousQuotesBlock;

import React, { useState, useEffect } from "react";
import icon_calendar from "assets/img/icon-calendar.svg";
import icon_blockquote from "assets/img/quotes-icon.png";
import fetchQuotesData from "helpers/fetchQuotesData";
import AjaxLoadingSpinner from "components/ajax/AjaxLoadingSpinner";
import AjaxError from "components/ajax/AjaxError";

const TodaysRandomQuote = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [todaysQuote, setTodaysQuote] = useState({});
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT_TODAYS_QUOTE;

  useEffect(() => {
    fetchQuotesData(apiEndpoint, setIsLoaded, setError, (json) => {
      setTodaysQuote(json.data);
    });
  }, []);

  const {
    dateFormatted = "",
    quoteContent = "",
    quoteLink = "",
    author: {
      authorName = "",
      quoteparkAuthorLink = "",
      wikiquoteAuthorLink = "",
    } = {},
  } = todaysQuote;

  if (error) {
    return <AjaxError ajaxError={error} />;
  } else if (!isLoaded) {
    return <AjaxLoadingSpinner />;
  } else {
    return (
      <div>
        <header className="flourish-grad-bg text-white text-left md:text-center pt-4 pb-10 sm:pt-12 sm:pb-24 md:pb-32">
          <h3 className="flex justify-center items-center space-x-3 inline-block mx-auto mb-8 xl:mb-18 text-1.5xl sm:text-2xl leading-7">
            <img src={icon_calendar} alt="Calendar icon" />
            <span className="max-w-xxxs sm:max-w-none">{dateFormatted}</span>
          </h3>
          <h1 className="heading-flourish heading-flourish-after md:heading-flourish-both text-4xl sm:text-5xl sm:leading-18 pl-6 sm:pl-20 w-2/3 md:w-full md:pl-0">
            Today's Random Quote:
          </h1>
        </header>
        <div className="w-full bg-white">
          <blockquote
            className="relative bg-quote-texture font-blockquote text-astronaut-blue text-opacity-75 text-3.5xl lg:text-5xl lg:leading-18 px-8 lg:px-20 pt-8 lg:pt-12 xl:pt-20 pb-14 sm:w-4/5 lg:w-3/4 xl:w-3/5 sm:mx-auto sm:-top-18 sm:shadow-blockquote"
            cite={quoteLink}
          >
            <img
              className="absolute icon-blockquote"
              src={icon_blockquote}
              alt="Opening quote icon"
            />
            <p className="text-indent-4 lg:text-indent-7">{quoteContent}</p>
            <footer className="mt-8 font-serif text-astronaut-blue text-opacity-1 text-right">
              <p className="h-10 text-2xl sm:mb-1 sm:text-3.5xl">
                {authorName}
              </p>
              <ul className="border-solid border-t-2 border-astronaut-blue border-opacity-25 pt-2 text-m sm:text-base">
                <li className="blockquote-footer-li">
                  <a target="_blank;" href={quoteLink}>
                    View this quote on quotepark.com
                  </a>
                  <span className="icon-ext-link"></span>
                </li>
                <li className="blockquote-footer-li">
                  <a target="_blank;" href={quoteparkAuthorLink}>
                    More quotes from {authorName}
                  </a>
                  <span className="icon-ext-link"></span>
                </li>
                <li className="blockquote-footer-li">
                  <a target="_blank;" href={wikiquoteAuthorLink}>
                    Find {authorName} on Wikiquote
                  </a>
                  <span className="icon-ext-link"></span>
                </li>
              </ul>
            </footer>
          </blockquote>
        </div>
      </div>
    );
  }
};

export default TodaysRandomQuote;

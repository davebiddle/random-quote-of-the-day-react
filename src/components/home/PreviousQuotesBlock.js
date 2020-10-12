import React, { useState, useEffect } from "react";
import icon_calendar_blue from "assets/img/icon-calendar-blue.svg";
import icon_calendar_orange from "assets/img/icon-calendar-orange.svg";
import fetchQuotesData from "helpers/fetchQuotesData";

function PreviousQuotesBlock() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [previousQuotes, setPreviousQuotes] = useState([]);

  useEffect(() => {
    fetchQuotesData("api/quotes/previous/3", setIsLoaded, setError, (json) => {
      setPreviousQuotes(json.data);
    });
  }, []);

  return (
    <div>
      <section className="flourish-genoa-bg px-5 pt-4 pb-16 sm:px-14 sm:pt-10">
        <h3 className="heading-flourish heading-flourish-after sm:heading-flourish-both text-white sm:text-3xl md:text-4xl sm:text-center sm:mb-10">
          Previous Quotes
        </h3>
        <ul className="previous-quotes-block-panel mt-3 text-astronaut-blue lg:flex lg:justify-between lg:space-x-8">
          {previousQuotes.map((quote) => {
            const {
              id: quoteId = 0,
              dateFormatted = "Loading...",
              quoteContent = "Loading...",
              quoteLink = "Loading...",
              author: { authorName = "Loading..." } = {},
            } = quote;

            return (
              <li key={quoteId}>
                <a target="_blank;" href={quoteLink}>
                  <h7>
                    <span className="icon-calendar-blue">
                      <img src={icon_calendar_blue} />
                    </span>
                    <span className="hidden icon-calendar-orange">
                      <img src={icon_calendar_orange} />
                    </span>
                    {dateFormatted}
                  </h7>
                  <blockquote>
                    <p>{quoteContent}</p>
                  </blockquote>
                  <footer>{authorName}</footer>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="bg-genoa h-48 flex justify-center lg:justify-end items-center lg:pr-24">
        <a
          className="text-astronaut-blue hover:text-genoa px-8 py-4 bg-neon-carrot-lighter hover:bg-white rounded sm:text-lg"
          href="/previous-quotes"
        >
          See all previous quotes
        </a>
      </section>
    </div>
  );
}

export default PreviousQuotesBlock;

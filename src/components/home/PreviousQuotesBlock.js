import React, { useState } from "react";
import icon_calendar_blue from "assets/img/icon-calendar-blue.svg";
import icon_calendar_orange from "assets/img/icon-calendar-orange.svg";

function PreviousQuotesBlock() {
  const [previousQuotes, setPreviousQuotes] = useState([
    {
      id: 5507,
      dateFormatted: "Wednesday 17th September 2020",
      quoteContent:
        '"Science can only arrange ethical propositions logically and furnish the means for the realization of ethical aims..."',
      authorName: "Albert Einstein",
      quoteLink:
        "https://quotepark.com/quotes/1830729-leonardo-da-vinci-the-variety-of-colour-in-objects-cannot-be-discern/",
    },
    {
      id: 5506,
      dateFormatted: "Friday 1st May 2020",
      quoteContent:
        '"Some day some fellow will invent a way of concentrating and storing up sunshine to use instead of this old..."',
      authorName: "Thomas Edison",
      quoteLink:
        "https://quotepark.com/quotes/1830729-leonardo-da-vinci-the-variety-of-colour-in-objects-cannot-be-discern/",
    },
    {
      id: 5505,
      dateFormatted: "Tuesday 9th July 2020",
      quoteContent: '"Where id is, there shall ego be."',
      authorName: "Sigmund Freud",
      quoteLink:
        "https://quotepark.com/quotes/1830729-leonardo-da-vinci-the-variety-of-colour-in-objects-cannot-be-discern/",
    },
  ]);

  return (
    <div>
      <section className="flourish-genoa-bg px-5 pt-4 pb-16 sm:px-14 sm:pt-10">
        <h3 className="heading-flourish heading-flourish-after sm:heading-flourish-both text-white sm:text-3xl md:text-4xl sm:text-center sm:mb-10">
          Previous Quotes
        </h3>
        <ul className="previous-quotes-block-panel mt-3 text-astronaut-blue lg:flex lg:justify-between lg:space-x-8">
          {previousQuotes.map((quote) => {
            const {
              id: quoteId,
              dateFormatted,
              quoteContent,
              authorName,
              quoteLink,
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

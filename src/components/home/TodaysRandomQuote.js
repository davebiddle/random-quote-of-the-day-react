import React, { useState } from "react";
import icon_calendar from "assets/img/icon-calendar.svg";
import icon_blockquote from "assets/img/quotes-icon.png";
import icon_ext_link_blue from "assets/img/icon-ext-link-blue.svg";
import icon_ext_link_orange from "assets/img/icon-ext-link-orange.svg";

function TodaysRandomQuote() {
  const [todaysQuote, setTodaysQuote] = useState({
    dateFormatted: "Thursday 17th September 2020",
    quoteContent:
      'The variety of colour in objects cannot be discerned at a great distance, excepting in those parts which are directly lighted up by the solar rays."',
    authorName: "Leonardo da Vinci",
    quoteLink:
      "https://quotepark.com/quotes/1830729-leonardo-da-vinci-the-variety-of-colour-in-objects-cannot-be-discern/",
    quoteparkAuthorLink: "https://quotepark.com/authors/leonardo-da-vinci/",
    wikiquoteAuthorLink:
      "https://en.wikiquote.org/w/index.php?search=Leonardo%20da%20Vinci",
  });

  const {
    dateFormatted,
    quoteContent,
    authorName,
    quoteLink,
    quoteparkAuthorLink,
    wikiquoteAuthorLink,
  } = todaysQuote;

  return (
    <div>
      <header className="flourish-grad-bg text-white text-left md:text-center pt-4 pb-10 sm:pt-12 sm:pb-24 md:pb-32">
        <h3 className="flex justify-center items-center space-x-3 inline-block mx-auto mb-8 xl:mb-18 text-1.5xl sm:text-2xl leading-7">
          <img src={icon_calendar} />
          <span className="max-w-xxxs sm:max-w-none">{dateFormatted}</span>
        </h3>
        <h1 className="heading-flourish heading-flourish-after md:heading-flourish-both text-4xl sm:text-5xl sm:leading-18 pl-6 sm:pl-20 w-2/3 md:w-full md:pl-0">
          Today's Random Quote:
        </h1>
      </header>
      <div className="w-full bg-white">
        <blockquote
          class="relative bg-quote-texture font-blockquote text-astronaut-blue text-opacity-75 text-3.5xl lg:text-5xl lg:leading-18 px-8 lg:px-20 pt-8 lg:pt-12 xl:pt-20 pb-14 sm:w-4/5 lg:w-3/4 sm:mx-auto sm:-top-18 sm:shadow-blockquote"
          cite={quoteLink}
        >
          <img className="absolute icon-blockquote" src={icon_blockquote} />
          <p className="text-indent-4 lg:text-indent-7">{quoteContent}</p>
          <footer className="mt-8 font-serif text-astronaut-blue text-opacity-1 text-right">
            <p className="h-10 text-2xl sm:mb-1 sm:text-3.5xl">{authorName}</p>
            <ul className="border-solid border-t-2 border-astronaut-blue border-opacity-25 pt-2 text-m sm:text-base">
              <li className="blockquote-footer-li">
                <a target="_blank;" href={quoteLink}>
                  View this quote on quotepark.com
                </a>
                <span className="icon-ext-link-blue">
                  <img src={icon_ext_link_blue} />
                </span>
                <span className="hidden icon-ext-link-orange">
                  <img src={icon_ext_link_orange} />
                </span>
              </li>
              <li className="blockquote-footer-li">
                <a target="_blank;" href={quoteparkAuthorLink}>
                  {`More quotes from ${authorName}`}
                </a>
                <span className="icon-ext-link-blue">
                  <img src={icon_ext_link_blue} />
                </span>
                <span className="hidden icon-ext-link-orange">
                  <img src={icon_ext_link_orange} />
                </span>
              </li>
              <li className="blockquote-footer-li">
                <a target="_blank;" href={wikiquoteAuthorLink}>
                  {`Find ${authorName} on Wikiquote`}
                </a>
                <span className="icon-ext-link-blue">
                  <img src={icon_ext_link_blue} />
                </span>
                <span className="hidden icon-ext-link-orange">
                  <img src={icon_ext_link_orange} />
                </span>
              </li>
            </ul>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default TodaysRandomQuote;

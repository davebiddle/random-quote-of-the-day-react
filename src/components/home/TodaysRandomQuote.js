import React from "react";
import icon_calendar from "assets/img/icon-calendar.svg";
import icon_blockquote from "assets/img/quotes-icon.png";

function TodaysRandomQuote() {
  return (
    <div>
      <header className="flourish-grad-bg text-white sm:text-center pb-10 sm:pb-32">
        <h3 className="inline-block mx-auto pl-24 sm:pl-0 mb-8 text-1.5xl leading-7 max-w-xxs sm:max-w-none">
          <img className="icon-calendar" src={icon_calendar} />
          Thursday 17th September 2020
        </h3>
        <h1 className="heading-flourish heading-flourish-after sm:heading-flourish-both text-4xl pl-6 max-w-xxs sm:max-w-none sm:pl-0">
          Today's Random Quote:
        </h1>
      </header>
      <div className="w-full bg-white">
        <blockquote
          class="relative bg-quote-texture font-blockquote text-astronaut-blue text-opacity-75 text-3.5xl px-8 pt-8 pb-14"
          cite="https://quotepark.com/quotes/1830729-leonardo-da-vinci-the-variety-of-colour-in-objects-cannot-be-discern/"
        >
          <img className="absolute icon-blockquote" src={icon_blockquote} />
          <p className="text-indent-4">
            The variety of colour in objects cannot be discerned at a great
            distance, excepting in those parts which are directly lighted up by
            the solar rays."
          </p>
          <footer className="mt-8 font-serif text-2xl text-astronaut-blue text-opacity-1 text-right">
            <p className="h-10">- Leonardo da Vinci</p>
            <ul className="border-solid border-t-2 border-astronaut-blue border-opacity-25 pt-2 text-m">
              <li className="blockquote-footer-li">
                <a href="https://quotepark.com/quotes/1830729-leonardo-da-vinci-the-variety-of-colour-in-objects-cannot-be-discern/">
                  View this quote on quotepark.com
                </a>
                <span className="ext-link-icon"></span>
              </li>
              <li className="blockquote-footer-li">
                <a href="https://quotepark.com/authors/leonardo-da-vinci/">
                  More quotes from Leonardo da Vinci
                </a>
                <span className="ext-link-icon"></span>
              </li>
              <li className="blockquote-footer-li">
                <a href="https://en.wikiquote.org/w/index.php?search=Leonardo%20da%20Vinci">
                  Find Leonardo da Vinci on Wikiquote
                </a>
                <span className="ext-link-icon"></span>
              </li>
            </ul>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default TodaysRandomQuote;

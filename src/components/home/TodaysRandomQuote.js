import React from "react";
import icon_calendar from "assets/img/icon-calendar.svg";

function TodaysRandomQuote() {
  return (
    <div>
      <div className="flourish-grad-bg text-white text-center pb-32">
        <h3 className="inline-block mx-auto mb-10 text-2xl">
          <img className="icon-calendar" src={icon_calendar} />
          Thursday 17th September 2020
        </h3>
        <h1 className="heading-flourish heading-flourish-after sm:heading-flourish-both">
          Today's Random Quote:
        </h1>
      </div>
      <div>
        <blockquote cite="https://quotepark.com/quotes/1830729-leonardo-da-vinci-the-variety-of-colour-in-objects-cannot-be-discern/">
          <p>
            The variety of colour in objects cannot be discerned at a great
            distance, excepting in those parts which are directly lighted up by
            the solar rays."
          </p>
          <footer>
            Leonardo da Vinci
            <hr />
            <ul>
              <li>
                <a href="https://quotepark.com/quotes/1830729-leonardo-da-vinci-the-variety-of-colour-in-objects-cannot-be-discern/">
                  View this quote on quotepark.com
                </a>
              </li>
              <li>
                <a href="https://quotepark.com/authors/leonardo-da-vinci/">
                  More quotes from Leonardo da Vinci
                </a>
              </li>
              <li>
                <a href="https://en.wikiquote.org/w/index.php?search=Leonardo%20da%20Vinci">
                  Find Leonardo da Vinci on Wikiquote
                </a>
              </li>
            </ul>
          </footer>
        </blockquote>
      </div>
    </div>
  );
}

export default TodaysRandomQuote;

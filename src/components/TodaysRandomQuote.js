import React from "react";

function TodaysRandomQuote() {
  return (
    <div>
      <h3>{new Date().toString()}</h3>
      <h1>Today's Random Quote:</h1>
      <div>
        <blockquote cite="https://quotepark.com/quotes/1830729-leonardo-da-vinci-the-variety-of-colour-in-objects-cannot-be-discern/">
          The variety of colour in objects cannot be discerned at a great
          distance, excepting in those parts which are directly lighted up by
          the solar rays."
        </blockquote>
        <div>
          <cite>Leonardo da Vinci</cite>
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
        </div>
      </div>
    </div>
  );
}

export default TodaysRandomQuote;

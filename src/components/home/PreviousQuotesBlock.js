import React from "react";

function PreviousQuotesBlock() {
  return (
    <div>
      <section className="bg-faded-jade pl-5 pt-5">
        <h3 className="heading-flourish heading-flourish-after sm:heading-flourish-both text-white">
          Previous Quotes
        </h3>
        <ul>
          <li>
            <a href="#">
              <h4>Wednesday 17th September 2020</h4>
              <blockquote>
                "Science can only arrange ethical propositions logically and
                furnish the means for the realization of ethical aims..."
              </blockquote>
              <cite>- Albert Einstein</cite>
            </a>
          </li>
          <li>
            <a href="#">
              <h4>Friday 1st May 2020</h4>
              <blockquote>
                "Some day some fellow will invent a way of concentrating and
                storing up sunshine to use instead of this old, absurd..."
              </blockquote>
              <cite>- Thomas Edison</cite>
            </a>
          </li>
          <li>
            <a href="#">
              <h4>Tuesday 9th July 2020</h4>
              <blockquote>"Where id is, there shall ego be."</blockquote>
              <cite>- Sigmund Freud</cite>
            </a>
          </li>
        </ul>
      </section>
      <section>
        <a href="/previous-quotes">See all previous quotes</a>
      </section>
    </div>
  );
}

export default PreviousQuotesBlock;

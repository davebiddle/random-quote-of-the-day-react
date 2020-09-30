import React from "react";
import icon_calendar_blue from "assets/img/icon-calendar-blue.svg";

function PreviousQuotesBlock() {
  return (
    <div>
      <section className="flourish-footer-bg px-5 pt-4 pb-16 sm:px-14 sm:pt-10">
        <h3 className="heading-flourish heading-flourish-after sm:heading-flourish-both text-white sm:text-4xl sm:text-center sm:mb-10">
          Previous Quotes
        </h3>
        <ul className="previous-quotes-block-panel mt-3 text-astronaut-blue sm:flex sm:justify-between sm:space-x-8">
          <li>
            <a href="#">
              <h7>
                <img className="mr-3" src={icon_calendar_blue} />
                Wednesday 17th September 2020
              </h7>
              <blockquote>
                <p>
                  "Science can only arrange ethical propositions logically and
                  furnish the means for the realization of ethical aims..."
                </p>
              </blockquote>
              <footer>- Albert Einstein</footer>
            </a>
          </li>
          <li>
            <a href="#">
              <h7>
                <img className="mr-3" src={icon_calendar_blue} />
                Friday 1st May 2020
              </h7>
              <blockquote>
                <p>
                  "Some day some fellow will invent a way of concentrating and
                  storing up sunshine to use instead of this old..."
                </p>
              </blockquote>
              <footer>- Thomas Edison</footer>
            </a>
          </li>
          <li>
            <a href="#">
              <h7>
                <img className="mr-3" src={icon_calendar_blue} />
                Tuesday 9th July 2020
              </h7>
              <blockquote>
                <p>"Where id is, there shall ego be."</p>
              </blockquote>
              <footer>- Sigmund Freud</footer>
            </a>
          </li>
        </ul>
      </section>
      <section className="bg-genoa h-48 flex justify-center sm:justify-end items-center sm:pr-24">
        <a
          className="text-astronaut-blue px-8 py-4 bg-neon-carrot-lighter rounded sm:text-lg"
          href="/previous-quotes"
        >
          See all previous quotes
        </a>
      </section>
    </div>
  );
}

export default PreviousQuotesBlock;

import React from "react";
import icon_calendar_blue from "assets/img/icon-calendar-blue.svg";

function PreviousQuotesBlock() {
  return (
    <div>
      <section className="bg-faded-jade px-5 pt-4 pb-20">
        <h3 className="heading-flourish heading-flourish-after sm:heading-flourish-both text-white">
          Previous Quotes
        </h3>
        <ul className="mt-3 text-astronaut-blue">
          <li className="bg-white mb-4">
            <a href="#">
              <h7 className="flex justify-center items-center h-13">
                <img className="mr-3" src={icon_calendar_blue} />
                Wednesday 17th September 2020
              </h7>
              <blockquote className="bg-neon-carrot bg-opacity-25 px-5 pt-3 pb-5 text-lg font-normal">
                "Science can only arrange ethical propositions logically and
                furnish the means for the realization of ethical aims..."
              </blockquote>
              <footer className="flex justify-end items-center pr-5 h-13">
                - Albert Einstein
              </footer>
            </a>
          </li>
          <li className="bg-white mb-4">
            <a href="#">
              <h7 className="flex justify-center items-center h-13">
                <img className="mr-3" src={icon_calendar_blue} />
                Friday 1st May 2020
              </h7>
              <blockquote className="bg-neon-carrot bg-opacity-25 px-5 pt-3 pb-5 text-lg font-normal">
                "Some day some fellow will invent a way of concentrating and
                storing up sunshine to use instead of this old, absurd..."
              </blockquote>
              <footer className="flex justify-end items-center pr-5 h-13">
                - Thomas Edison
              </footer>
            </a>
          </li>
          <li className="bg-white mb-4">
            <a href="#">
              <h7 className="flex justify-center items-center h-13">
                <img className="mr-3" src={icon_calendar_blue} />
                Tuesday 9th July 2020
              </h7>
              <blockquote className="bg-neon-carrot bg-opacity-25 px-5 pt-3 pb-5 text-lg font-normal">
                "Where id is, there shall ego be."
              </blockquote>
              <footer className="flex justify-end items-center pr-5 h-13">
                - Sigmund Freud
              </footer>
            </a>
          </li>
        </ul>
      </section>
      <section className="bg-genoa">
        <a href="/previous-quotes">See all previous quotes</a>
      </section>
    </div>
  );
}

export default PreviousQuotesBlock;

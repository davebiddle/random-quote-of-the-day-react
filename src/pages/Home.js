import React from "react";
import TodaysRandomQuote from "components/home/TodaysRandomQuote";
import PreviousQuotesBlock from "components/home/PreviousQuotesBlock";

function Home(props) {
  return (
    <div className="font-serif">
      <TodaysRandomQuote />
      <PreviousQuotesBlock />
    </div>
  );
}

export default Home;

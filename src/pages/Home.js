import React from "react";
import TodaysRandomQuote from "components/TodaysRandomQuote";
import PreviousQuotesBlock from "components/PreviousQuotesBlock";

function Home(props) {
  return (
    <div>
      <TodaysRandomQuote />
      <PreviousQuotesBlock />
    </div>
  );
}

export default Home;

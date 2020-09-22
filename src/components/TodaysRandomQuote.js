import React from "react";

function TodaysRandomQuote() {
  return (
    <div>
      <h3>{new Date().toString()}</h3>
      <h1>Today's Random Quote:</h1>
    </div>
  );
}

export default TodaysRandomQuote;

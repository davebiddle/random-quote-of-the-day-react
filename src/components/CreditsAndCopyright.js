import React from "react";

function CreditsAndCopyright() {
  return (
    <div>
      <p>
        Random QOTD is powered by{" "}
        <a href="https://rapidapi.com/martin.svoboda/api/quotes15/endpoints">
          RapidAPI
        </a>
        . Quotes are from <a href="https://quotepark.com">quotepark</a>.com.
        Clipart is from <a href="https://openclipart.org">openclipart.org</a>.
      </p>
      <p>&copy; 2020 Dave Biddle</p>
    </div>
  );
}

export default CreditsAndCopyright;

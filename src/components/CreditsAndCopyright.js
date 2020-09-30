import React from "react";

function CreditsAndCopyright() {
  return (
    <div className="credits-copyright bg-mako px-5 py-4 leading-7 sm:pt-8">
      <p className="w-full sm:text-center">
        Random QOTD is powered by{" "}
        <a
          target="_blank;"
          href="https://rapidapi.com/martin.svoboda/api/quotes15/endpoints"
        >
          RapidAPI
        </a>
        . Quotes are from{" "}
        <a target="_blank;" href="https://quotepark.com">
          quotepark.com
        </a>
        . Clipart is from{" "}
        <a target="_blank;" href="https://openclipart.org">
          openclipart.org
        </a>
        .
      </p>
      <p className="w-full sm:text-center">&copy; 2020 Dave Biddle</p>
    </div>
  );
}

export default CreditsAndCopyright;

import React, { useContext } from "react";
import QuotesContext from "contexts/QuotesContext";

function PreviousQuoteOpen(props) {
  const { quote } = props;
  const { isOpen, date: formattedDate } = quote;
  const { name: authorName, link: authorLink } = quote.author;
  const { excerpt: quoteExcerpt, link: quoteLink } = quote.quote;
  const { dispatch } = useContext(QuotesContext);

  return (
    <div
      className={`${
        isOpen ? "" : "hidden"
      } bg-neon-carrot bg-opacity-25 text-gray-600 text-md pb-6`}
    >
      <div className="flex justify-start items-center h-12 mb-4">
        <div
          className="px-2"
          onClick={() => {
            dispatch({
              type: "quote/toggleOpenState",
              payload: { quote: quote },
            });
          }}
        >
          <svg
            width="8.2021mm"
            height="8.2021mm"
            version="1.1"
            viewBox="0 0 8.2021 8.2021"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(-93.417 -130.46)">
              <g transform="matrix(1 0 0 1 88.257 51.216)" stroke="#cbd5e0">
                <rect
                  x="5.4239"
                  y="79.506"
                  width="7.6728"
                  height="7.6728"
                  rx="1.2788"
                  ry="1.2788"
                  fill="#fff"
                  stroke-linecap="round"
                  stroke-width=".51152"
                />
                <g transform="matrix(0 1 -.90557 0 71.555 72.76)" fill="none">
                  <path
                    d="m10.583 66.145v5.2916"
                    fill="none"
                    stroke="#cbd5e0"
                    stroke-linecap="round"
                    stroke-width=".52916"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="ml-16">{formattedDate}</div>
      </div>
      <div>
        <dl className="px-6">
          <dt className="font-bold">Author</dt>
          <dd className="mb-2">
            <a
              href={authorLink}
              title={`Find more quotes by ${authorName}`}
              target="_blank;"
            >
              {authorName}
            </a>
          </dd>
          <dt className="font-bold">Quote</dt>
          <dd>
            <a
              href={quoteLink}
              title="View this quote on quotepark.com"
              target="_blank;"
            >
              {quoteExcerpt}
            </a>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default PreviousQuoteOpen;

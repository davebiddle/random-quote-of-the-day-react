import React, { useContext } from "react";
import QuotesContext from "contexts/QuotesContext";
import SvgIconMinus from "components/svg/SvgIconMinus";

const PreviousQuoteOpen = ({ quote }) => {
  const {
    isOpen = false,
    formattedDate = "",
    author: { authorName = "", quoteparkAuthorLink = "" } = {},
    quote: { excerpt: quoteExcerpt = "", link: quoteLink = "" } = {},
  } = quote;
  const { dispatch } = useContext(QuotesContext);

  return (
    <div
      className={`${
        isOpen ? "" : "hidden"
      } bg-neon-carrot bg-opacity-25 text-mako-600 text-md pb-6`}
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
          <SvgIconMinus />
        </div>
        <div className="ml-16">{formattedDate}</div>
      </div>
      <div>
        <dl className="px-6">
          <dt className="font-bold">Author</dt>
          <dd className="mb-2">
            <a
              href={quoteparkAuthorLink}
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
};

export default PreviousQuoteOpen;

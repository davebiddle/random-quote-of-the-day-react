import React, { useContext } from "react";
import QuotesContext from "contexts/QuotesContext";

function ListingWide() {
  const { quotes } = useContext(QuotesContext);

  return (
    <table className="table-fixed w-full">
      <thead className="text-mako-600">
        <tr>
          <th>Date</th>
          <th>Author</th>
          <th>Quote</th>
        </tr>
      </thead>
      <tbody className="text-mako-700">
        {quotes.map((quote) => {
          const {
            id: quoteId,
            formattedDate,
            author: { authorName = "", quoteparkAuthorLink = "" } = {},
            quote: { excerpt: quoteExcerpt = "", link: quoteLink = "" } = {},
          } = quote;

          return (
            <tr key={quoteId} className="bg-white odd:bg-gray-300">
              <td>{formattedDate}</td>
              <td>
                <a
                  href={quoteparkAuthorLink}
                  title={`Find more quotes by ${authorName}`}
                  target="_blank;"
                >
                  {authorName}
                </a>
              </td>
              <td>
                <a
                  href={quoteLink}
                  title="View this quote on quotepark.com"
                  target="_blank;"
                >
                  {quoteExcerpt}
                </a>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ListingWide;

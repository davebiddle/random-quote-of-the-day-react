import React from "react";

function ListingWide(props) {
  const { quotes } = props;

  return (
    <table className="table-fixed w-full">
      <thead>
        <tr>
          <th>Date</th>
          <th>Author</th>
          <th>Quote</th>
        </tr>
      </thead>
      <tbody>
        {quotes.map((quote) => {
          const { id: quoteId, date: formattedDate } = quote;
          const { name: authorName, link: authorLink } = quote.author;
          const { excerpt: quoteExcerpt, link: quoteLink } = quote.quote;

          return (
            <tr key={quoteId} className="bg-white odd:bg-gray-300">
              <td>{formattedDate}</td>
              <td>
                <a
                  href={authorLink}
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

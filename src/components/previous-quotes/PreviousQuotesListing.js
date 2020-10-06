import React, { useReducer } from "react";
import ListingHeader from "components/previous-quotes/ListingHeader";
import ListingNarrow from "components/previous-quotes/ListingNarrow";
import ListingWide from "components/previous-quotes/ListingWide";
import ListingPagination from "components/previous-quotes/ListingPagination";
import QuotesContext from "contexts/QuotesContext";
import QuotesReducer from "reducers/QuotesReducer";

function PreviousQuotesListing() {
  const initialState = {
    quotes: [
      {
        id: 0,
        isOpen: false,
        date: "23rd Oct 2020",
        author: {
          name: "Leonardo da Vinci",
          link: "https://quotepark.com/authors/leonardo-da-vinci/",
        },
        quote: {
          excerpt: '"The variety of colour in objects cannot be..."',
          link:
            "https://quotepark.com/quotes/1830729-leonardo-da-vinci-the-variety-of-colour-in-objects-cannot-be-discern/",
        },
      },
      {
        id: 1,
        isOpen: false,
        date: "12th Sept 2020",
        author: {
          name: "Thomas Edison",
          link: "https://quotepark.com/authors/thomas-edison/",
        },
        quote: {
          excerpt: '"If we did all the things we are capable of doing..."',
          link:
            "https://quotepark.com/quotes/1860664-thomas-edison-if-we-did-all-the-things-we-are-capable-of-doing/",
        },
      },
      {
        id: 2,
        isOpen: false,
        date: "16th July 2019",
        author: {
          name: "Albert Einstein",
          link: "https://quotepark.com/authors/albert-einstein/",
        },
        quote: {
          excerpt: '"Life is like riding a bicycle. To keep your..."',
          link:
            "https://quotepark.com/quotes/1073101-albert-einstein-life-is-like-riding-a-bicycle-to-keep-your-balanc/",
        },
      },
    ],
  };

  const [state, dispatch] = useReducer(QuotesReducer, initialState);

  const { quotes } = state;

  return (
    <QuotesContext.Provider
      value={{
        quotes,
        dispatch,
      }}
    >
      <div className="previous-quotes-listing bg-white lg:w-4/5 lg:relative lg:m-auto lg:-top-12 lg:shadow-blockquote lg:px-8">
        <ListingHeader />
        <section className="border-t-2 border-gray-400">
          <section className="md:hidden">
            <ListingNarrow />
          </section>
          <section className="hidden md:block">
            <ListingWide />
          </section>
        </section>
        <ListingPagination />
      </div>
    </QuotesContext.Provider>
  );
}

export default PreviousQuotesListing;

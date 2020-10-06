import React, { useState } from "react";
import ListingHeader from "components/previous-quotes/ListingHeader";
import ListingNarrow from "components/previous-quotes/ListingNarrow";
import ListingWide from "components/previous-quotes/ListingWide";
import ListingPagination from "components/previous-quotes/ListingPagination";
import QuotesContext from "contexts/QuotesContext";

function PreviousQuotesListing() {
  const [quotes, setQuotes] = useState([
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
  ]);

  /**
   * Select handler for setting listing item order by date.
   *
   * @param {Object} event The select handler event
   * @return {null}
   */
  const orderBy = (event) => {
    console.log(event.target.value);
    const updatedQuotes = [...quotes];

    // Todo : When we fetch PQ's from Backend, we'll need
    // to make a request to fetch them in the specified order.
    setQuotes(updatedQuotes.reverse());
  };

  /**
   * Click handler for toggling listing item open/close state.
   *
   * @param {Object} quote The quote whose listing item is to be toggled
   * @return {null}
   */
  const toggleOpenState = (quote) => {
    // Create a shallow copy of the `quotes` state prop (using
    // spread), to work with.
    const updatedQuotes = [...quotes];

    // Clone the quote to be updated in our shallow copy of the
    // `quotes` state prop, to avoid working directly on the
    // state object.
    const index = updatedQuotes.indexOf(quote);
    updatedQuotes[index] = { ...quote };

    // Set the `isOpen` prop on our cloned quote to the inverse
    // of it's current value.
    updatedQuotes[index].isOpen = !updatedQuotes[index].isOpen;

    setQuotes(updatedQuotes);
  };

  return (
    <QuotesContext.Provider
      value={{
        quotes,
        orderBy,
        toggleOpenState,
      }}
    >
      <div className="previous-quotes-listing bg-white lg:w-4/5 lg:relative lg:m-auto lg:-top-12 lg:shadow-blockquote lg:px-8">
        <ListingHeader />
        <section className="border-t-2 border-gray-400">
          <section className="md:hidden">
            <ListingNarrow quotes={quotes} />
          </section>
          <section className="hidden md:block">
            <ListingWide quotes={quotes} />
          </section>
        </section>
        <ListingPagination />
      </div>
    </QuotesContext.Provider>
  );
}

export default PreviousQuotesListing;

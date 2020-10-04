import React, { useState } from "react";
import PreviousQuoteOpen from "components/previous-quotes/PreviousQuotesOpen";
import PreviousQuoteClosed from "components/previous-quotes/PreviousQuoteClosed";

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
    <div className="previous-quotes-listing">
      <header className="px-4 py-2 text-gray-600 text-sm italic">
        <p className="mb-2">Showing 1-20 of 1023 quotes</p>
        <div>
          <label for="select-order">Order by:</label>
          <div className="inline-block relative w-56 ml-4">
            <select
              id="select-order"
              name="select-order"
              className="appearance-none w-full bg-white border-2 border-gray-400 hover:border-gray-600 rounded px-4 py-1 pr-8 focus:outline-none focus:shadow-outline"
            >
              <option value="desc" selected>
                Date (Newest first)
              </option>
              <option value="asc">Date (Oldest first)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex justify-center items-center border-l-2 border-gray-400 w-12">
              <svg
                width="3.2217mm"
                height="1.933mm"
                version="1.1"
                viewBox="0 0 3.2217 1.933"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  transform="translate(-98.931 -142.66)"
                  fill="none"
                  stroke="#979797"
                  stroke-linecap="round"
                  stroke-width=".64434"
                >
                  <path d="m101.83 142.99-1.2887 1.2887" />
                  <path d="m99.253 142.99 1.2887 1.2887" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </header>
      <section className="border-t-2 border-gray-400">
        <div className="md:hidden">
          <header className="flex justify-start items-center h-10 border-b-2 border-gray-400 font-bold">
            <div className="px-2">
              <svg
                width="7.9375mm"
                height="7.9375mm"
                version="1.1"
                viewBox="0 0 7.9375 7.9375"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(-82.591 -137.4)" fill="none">
                  <g
                    transform="matrix(.72688 0 0 .72688 78.867 92.231)"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-width=".88645"
                  >
                    <path d="m10.583 65.034v5.1378" />
                    <path d="m12.356 68.399-1.7729 1.7729" />
                    <path d="m8.8103 68.399 1.7729 1.7729" />
                  </g>
                  <rect x="82.591" y="137.4" width="7.9375" height="7.9375" />
                </g>
              </svg>
            </div>
            <div className="ml-16">Date</div>
          </header>
          <section>
            <ul>
              {quotes.map((quote) => {
                return (
                  <li key={quote.id}>
                    {" "}
                    {quote.isOpen ? (
                      <PreviousQuoteOpen
                        quote={quote}
                        onClose={toggleOpenState}
                      />
                    ) : (
                      <PreviousQuoteClosed
                        quote={quote}
                        onOpen={toggleOpenState}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
        <div className="hidden md:block">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Author</th>
                <th>Quote</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12th Sept 2020</td>
                <td>
                  <a
                    href="https://quotepark.com/authors/leonardo-da-vinci/"
                    title="Find more quotes by Leonardo da Vinci"
                    target="_blank;"
                  >
                    Leonardo da Vinci
                  </a>
                </td>
                <td>
                  <a
                    href="https://quotepark.com/quotes/1830729-leonardo-da-vinci-the-variety-of-colour-in-objects-cannot-be-discern/"
                    title="View this quote on quotepark.com"
                    target="_blank;"
                  >
                    "The variety of colour in objects cannot be..."
                  </a>
                </td>
              </tr>
              <tr>
                <td>23rd Oct 2020</td>
                <td>
                  <a
                    href="https://quotepark.com/authors/leonardo-da-vinci/"
                    title="Find more quotes by Leonardo da Vinci"
                    target="_blank;"
                  >
                    Thomas Edison
                  </a>
                </td>
                <td>
                  <a
                    href="https://quotepark.com/quotes/1830729-leonardo-da-vinci-the-variety-of-colour-in-objects-cannot-be-discern/"
                    title="View this quote on quotepark.com"
                    target="_blank;"
                  >
                    "Some day some fellow will invent a way of..."
                  </a>
                </td>
              </tr>
              <tr>
                <td>16th July 2019</td>
                <td>
                  <a
                    href="https://quotepark.com/authors/leonardo-da-vinci/"
                    title="Find more quotes by Leonardo da Vinci"
                    target="_blank;"
                  >
                    Albert Einstein
                  </a>
                </td>
                <td>
                  <a
                    href="https://quotepark.com/quotes/1830729-leonardo-da-vinci-the-variety-of-colour-in-objects-cannot-be-discern/"
                    title="View this quote on quotepark.com"
                    target="_blank;"
                  >
                    "Science can only arrange ethical propositions..."
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="flex justify-center items-center h-20">
        <ul className="pagination flex justify-center items-center border-2 border-gray-400 rounded h-10">
          <li>
            <a className="disabled" href="#">
              &lt;&lt;
            </a>
          </li>
          <li>
            <a className="disabled" href="#">
              &lt;
            </a>
          </li>
          <li>
            <a className="active" href="#">
              1
            </a>
          </li>
          <li>
            <a href="#">&hellip;</a>
          </li>
          <li>
            <a href="#">29</a>
          </li>
          <li>
            <a href="#">30</a>
          </li>
          <li>
            <a href="#">&hellip;</a>
          </li>
          <li>
            <a href="#">101</a>
          </li>
          <li>
            <a href="#">&gt;</a>
          </li>
          <li>
            <a href="#">&gt;&gt;</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default PreviousQuotesListing;

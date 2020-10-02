import PreviousQuotesBlock from "components/home/PreviousQuotesBlock";
import React from "react";

function PreviousQuotesListing() {
  return (
    <div>
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
      <hr />
      <section>
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
      </section>
      <section>
        <ul>
          <li>
            <a href="#">&lt;</a>
          </li>
          <li>
            <a href="#">1</a>
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
        </ul>
      </section>
    </div>
  );
}

export default PreviousQuotesListing;

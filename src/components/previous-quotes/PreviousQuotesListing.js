import PreviousQuotesBlock from "components/home/PreviousQuotesBlock";
import React from "react";

function PreviousQuotesListing() {
  return (
    <div>
      <header>
        <p>Showing 1-20 of 1023 quotes</p>
        <div>
          <label for="select-order">Order by:</label>
          <select id="select-order" name="select-order">
            <option value="desc" selected>
              Date (Newest first)
            </option>
            <option value="asc">Date (Oldest first)</option>
          </select>
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

import React from "react";

function ListingPagination() {
  return (
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
  );
}

export default ListingPagination;

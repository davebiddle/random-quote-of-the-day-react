import React, { useContext } from "react";
import QuotesContext from "contexts/QuotesContext";

function PreviousQuoteClosed(props) {
  const { quote } = props;
  const { isOpen = false, formattedDate = "" } = quote;

  const { dispatch } = useContext(QuotesContext);

  return (
    <div
      className={`${
        isOpen ? "hidden" : ""
      } flex justify-start items-center h-12 text-mako-600`}
    >
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
          width="8.2025mm"
          height="8.2025mm"
          version="1.1"
          viewBox="0 0 8.2025 8.2025"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            transform="translate(-92.661 -137.26)"
            stroke="#cbd5e0"
            stroke-linecap="round"
          >
            <rect
              x="92.926"
              y="137.53"
              width="7.6725"
              height="7.6725"
              rx="1.2788"
              ry="1.2788"
              fill="#fff"
              stroke-width=".5115"
            />
            <g
              transform="matrix(.88552 0 0 .88552 88.562 67.561)"
              fill="#414a4f"
              stroke-width=".52916"
            >
              <path d="m9.2603 80.697v5.2916" />
              <path d="m11.906 83.343h-5.2916" />
            </g>
          </g>
        </svg>
      </div>
      <div className="ml-16">{formattedDate}</div>
    </div>
  );
}

export default PreviousQuoteClosed;

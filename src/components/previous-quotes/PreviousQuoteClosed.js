import React, { useContext } from "react";
import QuotesContext from "contexts/QuotesContext";
import SvgIconPlus from "components/svg/SvgIconPlus";

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
        <SvgIconPlus />
      </div>
      <div className="ml-16">{formattedDate}</div>
    </div>
  );
}

export default PreviousQuoteClosed;

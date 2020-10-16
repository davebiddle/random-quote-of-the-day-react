import React from "react";
import loading_spinner from "assets/img/loading-spinner.svg";

function AjaxLoadingSpinner() {
  return (
    <div className="w-full py-16 flex justify-center items-center font-serif text-faded-jade">
      <div className="flex flex-col justify-center items-center">
        <img className="animate-spin h-16 w-16 mb-4" src={loading_spinner} />
      </div>
    </div>
  );
}

export default AjaxLoadingSpinner;

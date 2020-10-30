import React from "react";
import SvgLoadingSpinner from "components/svg/SvgLoadingSpinner";

function AjaxLoadingSpinner() {
  return (
    <div className="w-full py-16 flex justify-center items-center font-serif text-faded-jade">
      <div className="flex flex-col justify-center items-center">
        <SvgLoadingSpinner className="animate-spin h-16 w-16 mb-4" />
      </div>
    </div>
  );
}

export default AjaxLoadingSpinner;

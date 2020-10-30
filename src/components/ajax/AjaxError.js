import React from "react";

function AjaxError(props) {
  const { ajaxError } = props;

  return (
    <div className="w-full flex justify-center items-center text-mako-700 mt-4">
      <div>
        <h2>Sorry! An error occurred. Please try again later.</h2>
        <p>{ajaxError.message}</p>
      </div>
    </div>
  );
}

export default AjaxError;

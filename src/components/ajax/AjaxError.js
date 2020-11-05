import React from "react";

const AjaxError = ({ ajaxError }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div>
        <h2>An error occurred. Please try again later.</h2>
        <p>{ajaxError.message}</p>
      </div>
    </div>
  );
};

export default AjaxError;

import React from "react";

const Button = ({ children, onClick, classes }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm laptopl:text-lg tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 flex items-center tablet:first:ml-0 ${classes}`}
    >
      {children}
    </button>
  );
};

export { Button };

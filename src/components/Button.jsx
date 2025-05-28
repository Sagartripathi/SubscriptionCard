import React from "react";

export const Button = ({ classNames, title }) => {
  return (
    <button
      className={`border-1 border-purple-500 w-fit px-4 py-2 rounded-md text-white, ${classNames}`}
    >
      {title}
    </button>
  );
};

export default Button;

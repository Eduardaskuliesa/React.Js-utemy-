import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="text-stone-300 text-lg w-full h-full  flex items-center justify-center rounded-md">
      {children}
    </button>
  );
};

export default Button;

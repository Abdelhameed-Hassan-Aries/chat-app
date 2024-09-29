import React from "react";
import clsx from "clsx";

const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={clsx(
      "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm",
      "placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm",
      className
    )}
    {...props}
  />
));

export default Input;

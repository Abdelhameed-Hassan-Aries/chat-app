import React from "react";
import clsx from "clsx";

const Input = React.forwardRef(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={clsx(
      "block w-full px-3 py-2 border border-gray-300 rounded-none rounded-l-md shadow-sm",
      "placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm",
      className
    )}
    {...props}
  />
));

export default Input;

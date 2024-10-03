import React from "react";
import clsx from "clsx";

const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={clsx(
      "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-none rounded-r-md shadow-sm",
      "text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400",
      className
    )}
    {...props}
  />
));

export default Button;

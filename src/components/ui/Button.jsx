import React from "react";
import clsx from "clsx";

const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={clsx(
      "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm",
      "text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
      className
    )}
    {...props}
  />
));

export default Button;

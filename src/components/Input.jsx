import React from "react";
import clsx from "clsx";

const Input = React.forwardRef(({ className, style, ...props }, ref) => (
  <input
    ref={ref}
    className={clsx(
      "block w-full px-4 py-2 border-none rounded-none",
      "bg-transparent text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary",
      "placeholder-chatgpt-light-text-placeholder dark:placeholder-chatgpt-dark-text-placeholder",
      "focus:outline-none",
      className
    )}
    style={{ height: "40px", padding: "6px", ...style }}
    {...props}
  />
));

export default Input;

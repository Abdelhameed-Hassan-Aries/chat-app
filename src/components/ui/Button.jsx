import React from "react";
import clsx from "clsx";

const Button = React.forwardRef(
  ({ className, disabled, children, ...props }, ref) => (
    <button
      ref={ref}
      className={clsx(
        "inline-flex items-center justify-center w-8 h-8 p-0 m-1 text-sm font-medium rounded-full",
        disabled
          ? "cursor-not-allowed opacity-50"
          : "bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500",
        "focus:outline-none",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
);

export default Button;

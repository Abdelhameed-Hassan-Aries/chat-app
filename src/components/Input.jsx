import React, { useEffect, useRef } from "react";
import clsx from "clsx";

const Input = React.forwardRef(
  ({ className, style, value, onChange, onKeyDown, disabled }, ref) => {
    const textareaRef = useRef(null) || ref;

    // Auto-resize the textarea based on content
    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = "40px"; // Reset height
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height based on scrollHeight
      }
    }, [value]);

    return (
      <textarea
        ref={textareaRef}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={clsx(
          "block w-full px-4 py-2 border-none resize-none",
          "bg-transparent text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary",
          "placeholder-chatgpt-light-text-placeholder dark:placeholder-chatgpt-dark-text-placeholder",
          "focus:outline-none",
          className
        )}
        style={style}
        disabled={disabled}
        rows={1}
        placeholder="Type your message..."
      />
    );
  }
);

export default Input;

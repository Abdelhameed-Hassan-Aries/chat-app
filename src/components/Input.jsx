import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

const Input = React.forwardRef(
  ({ className, style, value, onChange, onKeyDown, disabled }, ref) => {
    const textareaRef = useRef(null) || ref;
    const [isTyping, setIsTyping] = useState(false); // Track if the user has started typing

    // Auto-resize the textarea based on content
    useEffect(() => {
      if (textareaRef.current) {
        if (!isTyping) {
          // Set maxHeight to 40px initially, before user types
          textareaRef.current.style.maxHeight = "40px";
        } else {
          // Remove maxHeight once the user starts typing and allow textarea to grow dynamically
          textareaRef.current.style.maxHeight = "none";
          textareaRef.current.style.height = "auto"; // Allow shrinking if needed
          textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Dynamically set the height
        }
      }
    }, [value, isTyping]);

    const handleInputChange = (e) => {
      if (!isTyping) {
        setIsTyping(true); // Mark that the user has started typing, remove the max-height
      }
      onChange(e); // Call the provided onChange handler
    };

    return (
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleInputChange} // Custom handler to track user typing
        onKeyDown={onKeyDown}
        className={clsx(
          "block w-full px-4 py-2 border-none resize-none",
          "bg-transparent text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary",
          "placeholder-chatgpt-light-text-placeholder dark:placeholder-chatgpt-dark-text-placeholder",
          "focus:outline-none",
          className
        )}
        style={{ ...style, minHeight: "40px", overflowY: "auto" }} // Set minHeight and allow scrolling if content exceeds maxHeight
        disabled={disabled}
        rows={1}
        placeholder="Type your message..."
      />
    );
  }
);

export default Input;

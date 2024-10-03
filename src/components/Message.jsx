import { useState } from "react";
import { format } from "date-fns";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/Avatar";
import { RiRobot2Fill } from "react-icons/ri";
import { FiCopy, FiCheck } from "react-icons/fi"; // Import copy and check icons
import Tooltip from "./ui/Tooltip"; // Assuming you have a Tooltip component

function Message({ sender, text, isLoading, timestamp }) {
  const [copied, setCopied] = useState(false); // State to handle copy icon
  const isUser = sender === "user";
  const formattedTime = timestamp ? format(new Date(timestamp), "h:mm a") : "";

  // Function to copy the text to the clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(text); // Copy text to clipboard
    setCopied(true); // Show the check icon
    setTimeout(() => setCopied(false), 2000); // Revert back to copy icon after 2 seconds
  };

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 gap-3`}
    >
      {/* Bot Message with Avatar */}
      {!isUser && (
        <Avatar className="w-8 h-8 flex-shrink-0 rounded-full bg-chatgpt-light-main-surface-secondary dark:bg-chatgpt-dark-main-surface-secondary">
          <AvatarImage src="/path/to/pelcro-logo.svg" alt="Bot" />
          <AvatarFallback>
            <RiRobot2Fill
              size={24}
              className="text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary"
            />
          </AvatarFallback>
        </Avatar>
      )}

      {/* Message content (User or Bot) */}
      <div className={`max-w-screen-sm`}>
        <div
          className={`rounded-lg px-4 py-2 text-left shadow-md bg-chatgpt-light-main-surface-secondary dark:bg-chatgpt-dark-main-surface-secondary text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary`}
        >
          {isLoading ? (
            <div className="flex items-center space-x-2 h-full">
              <span className="dot bg-gray-600 dark:bg-white"></span>
              <span className="dot bg-gray-600 dark:bg-white"></span>
              <span className="dot bg-gray-600 dark:bg-white"></span>
            </div>
          ) : (
            text
          )}
        </div>
        {/* Display the formatted time and copy button */}
        <div
          className={`flex items-center text-xs text-gray-500 dark:text-gray-400 mt-2 ${
            isUser ? "justify-end" : "justify-start"
          }`}
        >
          <span>{formattedTime}</span>
          <Tooltip text="Copy" position="bottom">
            <button
              onClick={handleCopy}
              className="ml-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Message;

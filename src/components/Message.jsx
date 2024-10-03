import { format } from "date-fns";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/Avatar";
import { RiRobot2Fill } from "react-icons/ri";

function Message({ sender, text, isLoading, timestamp }) {
  const isUser = sender === "user";
  const formattedTime = timestamp ? format(new Date(timestamp), "h:mm a") : "";

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
        {/* Display the formatted time below the message */}
        <div
          className={`text-xs text-gray-500 dark:text-gray-400 mt-1 ${
            isUser ? "text-right" : "text-left"
          }`}
        >
          {formattedTime}
        </div>
      </div>
    </div>
  );
}

export default Message;

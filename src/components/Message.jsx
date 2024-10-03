import { Avatar, AvatarImage, AvatarFallback } from "./ui/Avatar";
import { RiRobot2Fill } from "react-icons/ri";

function Message({ sender, text, isLoading }) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 gap-2`}
    >
      {/* Bot Message with Avatar */}
      {!isUser && (
        <Avatar className="w-8 h-8 mr-2 rounded-full bg-chatgpt-light-main-surface-secondary dark:bg-chatgpt-dark-main-surface-secondary">
          <AvatarImage src="/path/to/pelcro-logo.svg" alt="Bot" />
          <AvatarFallback>
            <RiRobot2Fill
              size={24}
              className="text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary"
            />
          </AvatarFallback>
        </Avatar>
      )}

      {/* User Message */}
      {isUser ? (
        <div
          className={`rounded-lg px-4 py-2 max-w-xs text-left shadow-md bg-chatgpt-light-main-surface-secondary dark:bg-chatgpt-dark-main-surface-secondary text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary`}
        >
          {text}
        </div>
      ) : (
        // Bot Message or Loading Dots
        <div className="max-w-xs text-left text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary">
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
      )}
    </div>
  );
}

export default Message;

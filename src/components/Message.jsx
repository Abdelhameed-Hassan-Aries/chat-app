import { Avatar, AvatarImage, AvatarFallback } from "./ui/Avatar";

function Message({ sender, text }) {
  const isUser = sender === "user";
  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      } mb-4 items-end`}
    >
      {!isUser && (
        <Avatar className="w-8 h-8 mr-2">
          <AvatarImage src="/bot-avatar.png" alt="Bot" />
          <AvatarFallback>🤖</AvatarFallback>
        </Avatar>
      )}
      <div
        className={`rounded-lg px-4 py-2 max-w-xs ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
        }`}
      >
        {text}
      </div>
      {isUser && (
        <Avatar className="w-8 h-8 ml-2">
          <AvatarImage src="/user-avatar.png" alt="User" />
          <AvatarFallback>😊</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

export default Message;

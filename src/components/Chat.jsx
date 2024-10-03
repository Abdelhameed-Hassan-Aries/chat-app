import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import Button from "./ui/Button";
import Input from "./Input";
import { useConversations } from "../context/ConversationsContext";
import clsx from "clsx";
import { FaCircleArrowUp } from "react-icons/fa6";

function Chat() {
  const {
    activeConversationId,
    getActiveConversation,
    createNewConversation,
    addMessageToConversation,
    startNewConversation,
  } = useConversations();

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Scroll to the bottom of messages when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const activeConversation = getActiveConversation();
    setMessages(activeConversation ? activeConversation.messages : []);
  }, [activeConversationId, getActiveConversation]);

  const handleSend = async (initialMessage) => {
    const messageToSend = initialMessage || input;
    if (messageToSend.trim() === "" || loading) return; // Prevent sending if loading or input is empty

    setLoading(true); // Set loading state to true

    const userMessage = { sender: "user", text: messageToSend };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Create a new conversation if there is no activeConversationId
    let conversationId = activeConversationId;
    if (!conversationId) {
      const title = messageToSend.substring(0, 20);
      createNewConversation(title);
      conversationId = Date.now(); // Generate a unique ID for the new conversation
    }

    // Add the user's message to the conversation
    addMessageToConversation(conversationId, userMessage);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend }),
      });

      const data = await response.json();
      const botResponse = { sender: "bot", text: data.reply };

      // Add the bot's response to the conversation
      setMessages((prevMessages) => [...prevMessages, botResponse]);
      addMessageToConversation(conversationId, botResponse);
    } catch (error) {
      console.error(error);
      const botResponse = {
        sender: "bot",
        text: "Sorry, there was an error processing your request.",
      };

      setMessages((prevMessages) => [...prevMessages, botResponse]);
      addMessageToConversation(conversationId, botResponse);
    } finally {
      setInput("");
      setLoading(false); // Set loading state back to false
    }
  };

  const suggestions = [
    "What is the capital of France?",
    "Tell me a joke.",
    "Explain quantum physics.",
    "How does a blockchain work?",
  ];

  const startConversation = (text) => {
    startNewConversation();
    setMessages([]);
    setInput("");
    handleSend(text);
  };

  return (
    <div className="flex flex-col h-screen bg-chatgpt-light-main-surface-primary dark:bg-chatgpt-dark-main-surface-primary">
      {/* Message list container */}
      <div className="flex-1 overflow-y-auto p-4 pt-20 pb-24">
        <div
          className={clsx(
            "max-w-chat-container mx-auto",
            messages.length === 0 ? "h-full" : ""
          )}
        >
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => startConversation(suggestion)}
                    className="p-4 bg-chatgpt-light-main-surface-secondary dark:bg-chatgpt-dark-main-surface-secondary rounded-lg shadow text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {messages.map((msg, index) => (
                <Message
                  key={index}
                  sender={msg.sender}
                  text={msg.text}
                  isLoading={
                    loading &&
                    msg.sender === "bot" &&
                    index === messages.length - 1
                  }
                />
              ))}
              {/* Show loading dots when waiting for the bot's response */}
              {loading && <Message sender="bot" isLoading />}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>
      {/* Input area */}
      <div className="bottom-0 left-0 right-0 p-4 bg-chatgpt-light-main-surface-primary dark:bg-chatgpt-dark-main-surface-primary">
        <div className="p-2 w-full max-w-chat-container mx-auto flex items-center bg-chatgpt-light-main-surface-secondary dark:bg-chatgpt-dark-main-surface-secondary rounded-3xl">
          <Input
            type="text"
            className="flex-1 bg-transparent text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary placeholder-chatgpt-light-text-placeholder dark:placeholder-chatgpt-dark-text-placeholder px-4 py-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? handleSend() : null)}
            placeholder="Type your message..."
            style={{ height: "40px", padding: "6px" }}
            disabled={loading} // Disable input while loading
          />
          <Button
            className="w-8 h-8 m-1"
            onClick={() => handleSend()}
            disabled={input.trim() === "" || loading} // Disable button while loading
          >
            <FaCircleArrowUp
              size={32}
              className="text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Chat;

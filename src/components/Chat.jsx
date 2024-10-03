import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import Button from "./ui/Button";
import Input from "./Input";
import { useConversations } from "../context/ConversationsContext";

function Chat() {
  const {
    activeConversationId,
    getActiveConversation,
    addConversation,
    selectConversation,
    startNewConversation,
    messages,
    setMessages,
  } = useConversations();

  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const activeConversation = getActiveConversation();
    setMessages(activeConversation ? activeConversation.messages : []);
  }, [activeConversationId]);

  const handleSend = async (initialMessage) => {
    const messageToSend = initialMessage || input;
    if (messageToSend.trim() === "") return;

    const userMessage = { sender: "user", text: messageToSend };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageToSend }),
      });

      const data = await response.json();
      const botResponse = { sender: "bot", text: data.reply };
      setMessages((prevMessages) => [...prevMessages, botResponse]);

      const conversation = {
        id: activeConversationId || Date.now(),
        title:
          messages.length === 0
            ? messageToSend.substring(0, 20)
            : messages[0].text.substring(0, 20),
        messages: [...messages, userMessage, botResponse],
      };
      addConversation(conversation);
      if (!activeConversationId) {
        selectConversation(conversation.id);
      }
    } catch (error) {
      console.error(error);
      const botResponse = {
        sender: "bot",
        text: "Sorry, there was an error processing your request.",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } finally {
      setInput("");
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
    setInput("");
    setMessages([]);
    handleSend(text);
  };

  return (
    <div className="flex flex-col flex-1 bg-chatgpt-light-background dark:bg-chatgpt-dark-background">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => startConversation(suggestion)}
                className="p-4 bg-chatgpt-light-messageBgBot dark:bg-chatgpt-dark-messageBgBot rounded-lg shadow text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <Message key={index} sender={msg.sender} text={msg.text} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}
      <div className="p-4 bg-chatgpt-light-inputBg dark:bg-chatgpt-dark-inputBg">
        <div className="flex">
          <Input
            type="text"
            className="flex-1 rounded-l-md bg-chatgpt-light-inputBg dark:bg-chatgpt-dark-inputBg text-chatgpt-light-inputText dark:text-chatgpt-dark-inputText"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? handleSend() : null)}
            placeholder="Type your message..."
          />
          <Button
            className="rounded-r-md"
            onClick={() => handleSend()}
            disabled={input.trim() === ""}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Chat;

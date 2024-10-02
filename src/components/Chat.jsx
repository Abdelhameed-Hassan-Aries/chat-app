import { useState } from "react";
import Message from "./Message";
import Button from "./ui/Button";
import Input from "./Input";

function Chat() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);

  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botResponse = { sender: "bot", text: data.reply };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    } catch (error) {
      console.error(error);
      const botResponse = {
        sender: "bot",
        text: "Sorry, there was an error processing your request.",
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }
  };

  return (
    <div className="flex flex-col max-w-2xl mx-auto pt-10">
      <div
        className="bg-white shadow-md rounded-t-lg overflow-y-auto flex-1 p-4"
        style={{ maxHeight: "70vh" }}
      >
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      <div className="bg-white shadow-md rounded-b-lg p-4 flex">
        <Input
          type="text"
          className="flex-1 rounded-none rounded-l-md"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => (e.key === "Enter" ? handleSend() : null)}
          placeholder="Type your message..."
        />
        <Button className="rounded-none rounded-r-md" onClick={handleSend}>
          Send
        </Button>
      </div>
    </div>
  );
}

export default Chat;

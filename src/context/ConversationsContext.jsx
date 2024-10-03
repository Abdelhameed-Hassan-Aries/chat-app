import { createContext, useContext, useEffect, useState } from "react";

const ConversationsContext = createContext();

export function ConversationsProvider({ children }) {
  const [conversations, setConversations] = useState([]);
  const [activeConversationId, setActiveConversationId] = useState(null);
  const [messages, setMessages] = useState([]);

  const startNewConversation = () => {
    setActiveConversationId(null);
    setMessages([]);
  };

  useEffect(() => {
    const storedConversations = JSON.parse(
      localStorage.getItem("conversations") || "[]"
    );
    setConversations(storedConversations);
  }, []);

  useEffect(() => {
    localStorage.setItem("conversations", JSON.stringify(conversations));
  }, [conversations]);

  const addConversation = (conversation) => {
    setConversations((prev) => {
      const existingIndex = prev.findIndex(
        (conv) => conv.id === conversation.id
      );
      if (existingIndex !== -1) {
        const updatedConversations = [...prev];
        updatedConversations[existingIndex] = conversation;
        return updatedConversations;
      } else {
        return [conversation, ...prev];
      }
    });
  };

  const selectConversation = (id) => {
    setActiveConversationId(id);
    const activeConversation = conversations.find((conv) => conv.id === id);
    setMessages(activeConversation ? activeConversation.messages : []);
  };

  const getActiveConversation = () => {
    return conversations.find((conv) => conv.id === activeConversationId);
  };

  return (
    <ConversationsContext.Provider
      value={{
        conversations,
        addConversation,
        selectConversation,
        getActiveConversation,
        activeConversationId,
        startNewConversation,
        messages,
        setMessages,
      }}
    >
      {children}
    </ConversationsContext.Provider>
  );
}

export const useConversations = () => useContext(ConversationsContext);

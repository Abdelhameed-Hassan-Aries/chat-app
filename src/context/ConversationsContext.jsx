import { createContext, useContext, useEffect, useState } from "react";

const ConversationsContext = createContext();

export function ConversationsProvider({ children }) {
  const [conversations, setConversations] = useState([]);
  const [activeConversationId, setActiveConversationId] = useState(null);

  useEffect(() => {
    const storedConversations = JSON.parse(
      localStorage.getItem("conversations") || "[]"
    );
    setConversations(storedConversations);
  }, []);

  useEffect(() => {
    localStorage.setItem("conversations", JSON.stringify(conversations));
  }, [conversations]);

  const createNewConversation = (title) => {
    const newConversation = {
      id: Date.now(),
      title,
      messages: [],
      timestamp: new Date().toISOString(),
    };
    setConversations((prev) => [newConversation, ...prev]);
    setActiveConversationId(newConversation.id);
  };

  const addMessageToConversation = (conversationId, message) => {
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === conversationId
          ? { ...conv, messages: [...conv.messages, message] }
          : conv
      )
    );
  };

  const getActiveConversation = () => {
    return conversations.find((conv) => conv.id === activeConversationId);
  };

  const selectConversation = (id) => {
    setActiveConversationId(id);
  };

  const startNewConversation = () => {
    setActiveConversationId(null);
  };

  const deleteConversation = (id) => {
    setConversations((prev) => prev.filter((conv) => conv.id !== id));
    if (activeConversationId === id) {
      setActiveConversationId(null);
    }
  };

  return (
    <ConversationsContext.Provider
      value={{
        conversations,
        createNewConversation,
        addMessageToConversation,
        getActiveConversation,
        selectConversation,
        startNewConversation,
        deleteConversation,
        activeConversationId,
      }}
    >
      {children}
    </ConversationsContext.Provider>
  );
}

export const useConversations = () => useContext(ConversationsContext);

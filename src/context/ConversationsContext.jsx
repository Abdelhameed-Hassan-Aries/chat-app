import { createContext, useContext, useEffect, useState } from "react";
import { useSidebar } from "./SidebarContext"; // Import sidebar context to toggle sidebar
import { useIsSmallScreen } from "../hooks/useIsSmallScreen"; // Import your hook

const ConversationsContext = createContext();

export function ConversationsProvider({ children }) {
  const [conversations, setConversations] = useState([]);
  const [activeConversationId, setActiveConversationId] = useState(null);

  const { closeSidebar } = useSidebar(); // Get closeSidebar from SidebarContext
  const isSmallScreen = useIsSmallScreen(); // Get screen size

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

    if (isSmallScreen) {
      closeSidebar(); // Collapse sidebar if screen is small
    }
  };

  const selectConversation = (id) => {
    setActiveConversationId(id);
    if (isSmallScreen) {
      closeSidebar(); // Collapse sidebar on small screens after selecting a conversation
    }
  };

  const startNewConversation = () => {
    setActiveConversationId(null);
    if (isSmallScreen) {
      closeSidebar(); // Collapse sidebar when starting new conversation on small screens
    }
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
        startNewConversation,
        selectConversation,
        deleteConversation,
        activeConversationId,
      }}
    >
      {children}
    </ConversationsContext.Provider>
  );
}

export const useConversations = () => useContext(ConversationsContext);

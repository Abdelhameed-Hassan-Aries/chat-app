// src/components/Navbar.jsx
import { FiChevronRight } from "react-icons/fi";
import { HiOutlineChatAlt } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";
import Tooltip from "./ui/Tooltip";
import { useSidebar } from "../context/SidebarContext";
import { useConversations } from "../context/ConversationsContext";

function Navbar() {
  const { isOpen, toggleSidebar } = useSidebar();
  const { startNewConversation } = useConversations();

  return (
    <nav className="flex items-center justify-between px-4 bg-chatgpt-light-main-surface-primary dark:bg-chatgpt-dark-main-surface-primary h-16 fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center">
        {!isOpen && (
          <div className="flex">
            <Tooltip text="Open Sidebar" position="bottom">
              <button
                onClick={toggleSidebar}
                className="p-2 text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
              >
                <FiChevronRight size={24} />
              </button>
            </Tooltip>
            <Tooltip text="New Chat" position="bottom">
              <button
                onClick={startNewConversation}
                className="ml-2 p-2 text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
              >
                <HiOutlineChatAlt size={24} />
              </button>
            </Tooltip>
          </div>
        )}
      </div>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;

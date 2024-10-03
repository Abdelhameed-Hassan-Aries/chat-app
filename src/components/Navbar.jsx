import { FiMenu, FiPlus } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { useSidebar } from "../context/SidebarContext";
import { useConversations } from "../context/ConversationsContext";

function Navbar() {
  const { isOpen, toggleSidebar } = useSidebar();
  const { startNewConversation } = useConversations();

  return (
    <nav className="flex items-center justify-between px-4 bg-chatgpt-light-background dark:bg-chatgpt-dark-background h-16">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className={`p-2 text-gray-700 dark:text-gray-300 transition-opacity duration-300 ${
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <FiMenu size={24} />
        </button>
        <button
          onClick={startNewConversation}
          className={`ml-2 p-2 text-gray-700 dark:text-gray-300 transition-opacity duration-300 ${
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <FiPlus size={24} />
        </button>
      </div>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;

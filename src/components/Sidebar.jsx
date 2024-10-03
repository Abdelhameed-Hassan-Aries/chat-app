import { FiPlus, FiMenu } from "react-icons/fi";
import { useSidebar } from "../context/SidebarContext";
import { useConversations } from "../context/ConversationsContext";

function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();
  const {
    conversations,
    selectConversation,
    activeConversationId,
    startNewConversation,
  } = useConversations();

  return (
    <div
      className={`transition-all duration-300 flex-shrink-0 ${
        isOpen ? "w-64" : "w-0"
      } bg-chatgpt-light-sidebar dark:bg-chatgpt-dark-sidebar`}
    >
      <div className="flex flex-col h-full">
        <div
          className={`flex items-center justify-between px-4 h-16 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-700 dark:text-gray-300"
          >
            <FiMenu size={24} />
          </button>
          <button
            onClick={startNewConversation}
            className="p-2 text-gray-700 dark:text-gray-300"
          >
            <FiPlus size={24} />
          </button>
        </div>
        {isOpen && (
          <div className="flex-1 p-4">
            <ul>
              {conversations.map((conv) => (
                <li key={conv.id}>
                  <button
                    onClick={() => selectConversation(conv.id)}
                    className={`w-full text-left py-2 px-3 rounded hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 ${
                      activeConversationId === conv.id
                        ? "bg-gray-300 dark:bg-gray-700"
                        : ""
                    }`}
                  >
                    {conv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;

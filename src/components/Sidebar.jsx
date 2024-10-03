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
      className={`overflow-y-auto transition-all duration-300 ${
        isOpen ? "w-64" : "w-0"
      } bg-chatgpt-light-sidebar dark:bg-chatgpt-dark-sidebar`}
    >
      {isOpen && (
        <div className="p-4">
          <div className="flex items-center mb-4">
            <button
              onClick={toggleSidebar}
              className="p-2 text-gray-700 dark:text-gray-300"
            >
              <FiMenu size={24} />
            </button>
            <button
              onClick={startNewConversation}
              className="ml-2 p-2 text-gray-700 dark:text-gray-300"
            >
              <FiPlus size={24} />
            </button>
          </div>
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
  );
}

export default Sidebar;

import { FiChevronLeft, FiDelete } from "react-icons/fi"; // Import FiDelete
import { HiOutlineChatAlt } from "react-icons/hi";
import Tooltip from "./ui/Tooltip";
import { useSidebar } from "../context/SidebarContext";
import { useConversations } from "../context/ConversationsContext";
import {
  format,
  isToday,
  isYesterday,
  subDays,
  isWithinInterval,
  parseISO,
} from "date-fns";

function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();
  const {
    conversations,
    selectConversation,
    activeConversationId,
    startNewConversation,
    deleteConversation,
  } = useConversations();

  // Group conversations by date
  const groupedConversations = groupConversationsByDate(conversations);

  return (
    <div
      className={`transition-all duration-300 flex-shrink-0 ${
        isOpen ? "w-64" : "w-0"
      } bg-chatgpt-light-sidebar-surface-primary dark:bg-chatgpt-dark-sidebar-surface-primary top-0 left-0 bottom-0 overflow-y-auto z-20`}
    >
      <div className="flex flex-col h-full">
        <div
          className={`flex items-center justify-between px-4 h-16 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Tooltip text="Collapse" position="bottom">
            <button
              onClick={toggleSidebar}
              className="p-2 text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
            >
              <FiChevronLeft size={24} />
            </button>
          </Tooltip>
          <Tooltip text="New Chat" position="bottom">
            <button
              onClick={startNewConversation}
              className="p-2 text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
            >
              <HiOutlineChatAlt size={24} />
            </button>
          </Tooltip>
        </div>
        {isOpen && (
          <div className="flex-1 p-4 overflow-y-auto">
            <ul>
              {Object.keys(groupedConversations).map((dateLabel) => (
                <div key={dateLabel}>
                  <div className="text-sm text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary my-3">
                    {dateLabel}
                  </div>
                  {groupedConversations[dateLabel].map((conv) => (
                    <li key={conv.id} className="mb-2">
                      <button
                        onClick={() => selectConversation(conv.id)}
                        className={`w-full flex items-center justify-between py-2 px-3 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary ${
                          activeConversationId === conv.id
                            ? "bg-gray-200 dark:bg-gray-700"
                            : ""
                        }`}
                      >
                        <span>{conv.title}</span>
                        <Tooltip text="Delete" position="bottom">
                          <span
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteConversation(conv.id);
                            }}
                            className="flex items-center justify-center p-1 text-gray-500 hover:text-red-500 cursor-pointer" // Flex to center and fix height
                            style={{ height: "24px", width: "24px" }} // Set explicit size for the icon container
                          >
                            <FiDelete size={16} />{" "}
                            {/* Replaced with FiDelete */}
                          </span>
                        </Tooltip>
                      </button>
                    </li>
                  ))}
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper function to group conversations by date
function groupConversationsByDate(conversations) {
  const grouped = {};

  conversations.forEach((conv) => {
    const date = parseISO(conv.timestamp);
    let dateLabel = "";

    if (isToday(date)) {
      dateLabel = "Today";
    } else if (isYesterday(date)) {
      dateLabel = "Yesterday";
    } else if (
      isWithinInterval(date, {
        start: subDays(new Date(), 7),
        end: new Date(),
      })
    ) {
      dateLabel = "Last 7 Days";
    } else {
      dateLabel = format(date, "MMM dd, yyyy");
    }

    if (!grouped[dateLabel]) {
      grouped[dateLabel] = [];
    }

    grouped[dateLabel].push(conv);
  });

  return grouped;
}

export default Sidebar;

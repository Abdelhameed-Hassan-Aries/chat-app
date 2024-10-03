import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { SidebarProvider } from "./context/SidebarContext";
import { ConversationsProvider } from "./context/ConversationsContext";

function App() {
  return (
    <SidebarProvider>
      <ConversationsProvider>
        <div className="flex h-screen overflow-hidden bg-chatgpt-light-main-surface-primary dark:bg-chatgpt-dark-main-surface-primary">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            <Chat />
          </div>
        </div>
      </ConversationsProvider>
    </SidebarProvider>
  );
}

export default App;

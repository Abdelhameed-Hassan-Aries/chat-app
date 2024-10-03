import { createContext, useContext, useState, useEffect } from "react";
import { useIsSmallScreen } from "../hooks/useIsSmallScreen";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const isSmallScreen = useIsSmallScreen();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (isSmallScreen) {
      setIsOpen(false); // Collapse sidebar by default on small screens
    }
  }, [isSmallScreen]);

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);

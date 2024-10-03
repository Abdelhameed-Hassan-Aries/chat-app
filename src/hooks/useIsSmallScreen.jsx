import { useState, useEffect } from "react";

export function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleScreenChange = (e) => setIsSmallScreen(e.matches);

    // Set initial value
    setIsSmallScreen(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  return isSmallScreen;
}

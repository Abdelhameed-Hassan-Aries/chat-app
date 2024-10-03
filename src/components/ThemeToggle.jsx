import { FiSun, FiMoon } from "react-icons/fi";
import Tooltip from "./ui/Tooltip";
import useTheme from "../hooks/useTheme";

function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Tooltip text="Toggle Theme" position="left">
      <button
        onClick={toggleTheme}
        className="p-2 text-chatgpt-light-text-primary dark:text-chatgpt-dark-text-primary hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
      >
        {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
      </button>
    </Tooltip>
  );
}

export default ThemeToggle;

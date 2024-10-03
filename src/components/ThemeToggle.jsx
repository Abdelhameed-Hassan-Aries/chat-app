import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-gray-700 dark:text-gray-300"
    >
      {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
}

export default ThemeToggle;

const Tooltip = ({ children, text, position = "top" }) => {
  return (
    <div className="relative group">
      {children}
      <div
        className={`absolute ${
          position === "top"
            ? "bottom-full mb-2"
            : position === "bottom"
            ? "top-full mt-2"
            : ""
        } left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col items-center z-50`}
      >
        <div className="px-2 py-1 text-sm rounded-md bg-gray-800 text-white dark:bg-gray-200 dark:text-black whitespace-nowrap">
          {text}
        </div>
        <div
          className={`w-2 h-2 ${
            position === "top"
              ? "bg-gray-800 dark:bg-gray-200 -mt-1"
              : "bg-gray-800 dark:bg-gray-200 -mb-1"
          } transform rotate-45`}
        ></div>
      </div>
    </div>
  );
};

export default Tooltip;

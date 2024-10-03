import clsx from "clsx";

const Tooltip = ({ children, text, position = "top" }) => {
  const getPositionClasses = () => {
    switch (position) {
      case "top":
        return "bottom-full mb-2 left-1/2 transform -translate-x-1/2";
      case "bottom":
        return "top-full mt-2 left-1/2 transform -translate-x-1/2";
      case "left":
        return "right-full mr-2 top-1/2 transform -translate-y-1/2";
      case "right":
        return "left-full ml-2 top-1/2 transform -translate-y-1/2";
      default:
        return "bottom-full mb-2 left-1/2 transform -translate-x-1/2";
    }
  };

  return (
    <div className="relative group">
      {children}
      <div
        className={clsx(
          "absolute z-50 hidden group-hover:flex",
          getPositionClasses()
        )}
        style={{ whiteSpace: "nowrap" }}
      >
        <div className="px-2 py-1 text-sm rounded-md bg-gray-800 text-white dark:bg-gray-200 dark:text-black shadow-lg">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Tooltip;

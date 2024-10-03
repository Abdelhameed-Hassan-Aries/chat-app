module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // Base colors
        white: "#fff",
        black: "#000",
        "gray-50": "#f9f9f9",
        "gray-100": "#ececec",
        "gray-200": "#e3e3e3",
        "gray-300": "#cdcdcd",
        "gray-400": "#b4b4b4",
        "gray-500": "#9b9b9b",
        "gray-600": "#676767",
        "gray-700": "#424242",
        "gray-750": "#2f2f2f",
        "gray-800": "#212121",
        "gray-900": "#171717",
        "gray-950": "#0d0d0d",
        // Custom colors
        "chatgpt-dark-main-surface-primary": "#212121",
        "chatgpt-dark-sidebar-surface-primary": "#171717",
        "chatgpt-dark-main-surface-secondary": "#2f2f2f",
        "chatgpt-dark-main-surface-tertiary": "#424242",
        "chatgpt-dark-text-primary": "#ececec",
        "chatgpt-dark-text-secondary": "#b4b4b4",
        "chatgpt-dark-text-placeholder": "rgba(255, 255, 255, 0.8)",
        "chatgpt-light-main-surface-primary": "#fff",
        "chatgpt-light-sidebar-surface-primary": "#f9f9f9",
        "chatgpt-light-main-surface-secondary": "#ececec",
        "chatgpt-light-main-surface-tertiary": "#e3e3e3",
        "chatgpt-light-text-primary": "#000",
        "chatgpt-light-text-secondary": "#676767",
        "chatgpt-light-text-placeholder": "rgba(0, 0, 0, 0.5)",
      },
      maxWidth: {
        "chat-container": "800px",
      },
    },
  },
  plugins: [],
};

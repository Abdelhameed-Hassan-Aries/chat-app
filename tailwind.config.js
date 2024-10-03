module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "chatgpt-light-background": "#F7F7F8",
        "chatgpt-light-navbar": "#FFFFFF",
        "chatgpt-light-sidebar": "#EDEDED",
        "chatgpt-light-text": "#000000",
        "chatgpt-light-inputBg": "#FFFFFF",
        "chatgpt-light-inputText": "#000000",
        "chatgpt-light-messageBgUser": "#DCF8C6",
        "chatgpt-light-messageBgBot": "#FFFFFF",
        "chatgpt-dark-background": "#343541",
        "chatgpt-dark-navbar": "#343541",
        "chatgpt-dark-sidebar": "#202123",
        "chatgpt-dark-text": "#FFFFFF",
        "chatgpt-dark-inputBg": "#40414F",
        "chatgpt-dark-inputText": "#FFFFFF",
        "chatgpt-dark-messageBgUser": "#2A2B32",
        "chatgpt-dark-messageBgBot": "#444654",
      },
      maxWidth: {
        "chat-container": "800px",
      },
    },
  },
  plugins: [],
};

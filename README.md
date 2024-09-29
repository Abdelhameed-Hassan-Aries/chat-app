# Chat Application powered by OpenAI

A sleek, modern chat application that mimics the functionality of ChatGPT, built with **React**, **Tailwind CSS**, and **shadcn UI components**. This app integrates with the **OpenAI API** to provide AI-powered responses in a conversational interface.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contact](#contact)

---

## Features

- **Real-time Chat Interface**: Engaging UI for seamless conversations.
- **AI-Powered Responses**: Integrates with OpenAI's API to generate intelligent replies.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Modern Styling**: Uses Tailwind CSS and shadcn components for a sleek look.
- **Avatar Support**: Displays user and bot avatars with fallback options.

---

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **OpenAI API Key**

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Abdelhameed-Hassan-Aries/chat-app.git
cd chat-app
```

### 2. Install Dependencies

#### a. Install Client Dependencies

From the root directory (`chat-app`), run:

```bash
npm install
```

This command installs the client dependencies listed in the root `package.json` file.

#### b. Install Server Dependencies

Navigate to the `server` directory and install its dependencies:

```bash
cd server
npm install
cd ..
```

This installs the server dependencies listed in `server/package.json`.

### 3. Set Up OpenAI API Key

- Sign up at [OpenAI](https://platform.openai.com/) if you haven't already.
- Navigate to the **API Keys** section and generate a new key.
- In the `server` directory, you'll find a `.env` file.

- Open the `.env` file and add your API key:

  ```env
  OPENAI_API_KEY=your_openai_api_key_here
  ```

  _Ensure that you replace `your_openai_api_key_here` with your actual API key._

### 4. Start the Application

To run the client and server concurrently, from the root directory (`chat-app`), use:

```bash
npm start
```

- The server will run on `http://localhost:5000`.
- The client app will run on `http://localhost:5173`.

---

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. You should see the chat interface.
3. Type a message in the input field and press **Enter** or click the **Send** button.
4. Wait for the AI-powered response to appear in the chat window.

---

## Scripts

The following scripts are available in the root `package.json` file:

- **Run the Client Only**:

  ```bash
  npm run dev
  ```

- **Run the Server Only**:

  ```bash
  npm run start:server
  ```

- **Run Both Client and Server Concurrently**:

  ```bash
  npm start
  ```

- **Build the Client for Production**:

  ```bash
  npm run build
  ```

- **Preview the Production Build**:

  ```bash
  npm run preview
  ```

- **Lint the Code**:

  ```bash
  npm run lint
  ```

---

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: Fast frontend build tool for web development.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **shadcn Components**: Pre-built, styled components for React and Tailwind CSS.
- **Express.js**: Web framework for Node.js.
- **OpenAI API**: AI models for generating responses.
- **dotenv**: Module to load environment variables.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **Concurrently**: Utility to run multiple commands concurrently.

---

## Project Structure

```
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── Chat.jsx
│   │   │   ├── Message.jsx
│   │   │   └── ui
│   │   │       ├── Avatar.jsx
│   │   │       ├── Button.jsx
│   │   │       └── Input.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── ...
├── server
│   ├── server.js
│   ├── package.json
│   ├── .env.example
├── package.json
├── README.md
└── ...
```

---

## Contact

- **Author**: Abdelhameed Hassan
- **Email**: [abdelhameed.hs0@gmail.com](mailto:abdelhameed.hs0@gmail.com)

---

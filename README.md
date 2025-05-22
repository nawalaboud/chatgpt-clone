#  React Chat App

This is a simple chat interface built with React. It simulates a conversation between a user and a bot by displaying messages in a styled UI. The bot generates a random response for every user input.

## Features

Send and receive messages in a styled chat interface.

Simulated bot responses.

Keyboard shortcut: press Enter to send a message.

CSS-based styling and layout.

Unit tested components with React Testing Library.


##  Technologies Used
React (with Hooks)

TypeScript

CSS 

Jest and React Testing Library for testing

Create React App

## Installation

Before you begin, ensure you have Node.js and npm installed.

1. Clone the repository:

    ```git clone https://gitlab.com/nawalaboud/chatgpt-clone.git```

    ```cd chat-clone```

2. Install dependencies:

    ```npm install```  

3. Start the development server:

    ```npm start```

    Then open your browser and navigate to: http://localhost:3000

## Running Tests

The app includes basic unit tests to ensure UI interactions work as expected.

To run tests:

    npm test

## Concepts Used

1. React Functional Components:

    All components are function-based, e.g., ChatContainer, Message, and MessageInput.

2. TypeScript:

    Custom types like MessageData, defined in the types folder, ensure type safety.

3. useState:

    To manage the list of messages and unique message IDs.

## Project Structure
**src/**

├── App.css

├── App.test.tsx

├── App.tsx

**├── components**

│           ├── ChatContainer.test.tsx

│           ├── ChatContainer.tsx

│           ├── MessageInput.tsx

│           ├── Message.tsx

├── index.css

├── index.tsx

├── react-app-env.d.ts

├── reportWebVitals.ts

├── setupTests.ts

**├── types**

|           ├── message.ts

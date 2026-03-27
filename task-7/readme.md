# Chat Simulation App

## Features

- **Message Handling:** Send messages using the "Send" button or by pressing the `Enter` key.
- **Bot Simulation:** Automatically receives random replies from a "bot" after a short delay (2 seconds) using timeout.
- **Timestamps:** Displays the current time for every message sent or received.
- **Auto-Scroll:** Ensures the chat window automatically scrolls to the newest message.

## Core Logic

1.  **Message Rendering (`renderMessage`)**:
    - Assigns CSS classes based on the sender (`user` or `bot`).
    - Automatically scrolls the chat container to the bottom to show the latest message.

2.  **Bot Simulation (`simulateReply`)**:
    - Contains an array of predefined responses (e.g., "I will call u later", "Sounds good!").
    - Selects a random response using `Math.random()`.
    - Uses `setTimeout` to delay the bot's response by 2 seconds, creating a realistic chat feel.

3.  **Event Listeners**:
    - `click` event on the "Send" button.
    - `keypress` event on the input field to detect the `Enter` key.
    - Both trigger the `sendMessage` function to process user input and initiate the bot response cycle.

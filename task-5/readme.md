# Quiz App

A simple interactive quiz application built with HTML, CSS, and JavaScript.

## Features

- **Dynamic Question Loading**: Questions are loaded from a JavaScript object array.
- **Score Tracking**: The application tracks the user's score throughout the quiz.
- **Result Summary**: Displays a detailed result page showing the user's answers vs. correct answers.

## Core Logic

1.  **Data Management**:
    - `quizData`: An array of objects storing questions, options, and correct answers.
    - `userAnswers`: Tracks the user's selected answers during the quiz.

2.  **Question Rendering (`loadQuestion`)**:
    - Clears previous content.
    - Dynamically creates DOM elements for the current question text and options.
    - Attaches click event listeners to options for selection.

3.  **User Interaction**:
    - **Selection**: `selectOption` highlights the chosen answer and updates the temporary state.
    - **Navigation**: The "Next" button validates that an option is selected, updates the score if the answer is correct, and advances to the next question.

4.  **Results (`showResult`)**:
    - Triggered when all questions are answered.
    - Displays the final score.
    - Generates a breakdown of each question, showing the user's choice (color-coded red for wrong, green for correct) compared to the correct answer.


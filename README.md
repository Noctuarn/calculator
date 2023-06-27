# Calculator App

This project is a simple calculator application built using React. It allows users to perform basic arithmetic calculations such as addition, subtraction, multiplication, and division.

## Getting Started

To get started with the calculator app, follow the instructions below:

1. Clone the project repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your web browser and visit `http://localhost:3000` to view the app.

## Functionality

The calculator app provides the following features:

- Addition (+): Perform addition between two numbers.
- Subtraction (-): Perform subtraction between two numbers.
- Multiplication (\*): Perform multiplication between two numbers.
- Division (/): Perform division between two numbers.
- Clear (C): Clear the calculator's display and reset the operands.
- Delete (DEL): Delete the last entered digit.
- Equal (=): Evaluate the expression and display the result.

## Usage

The calculator app consists of a user interface with digit buttons, operation buttons, and an output display. Users can click the digit buttons to enter numbers, choose an operation, and click the equal button to evaluate the expression and display the result.

The app utilizes the `useReducer` hook from React to manage the state and perform the necessary calculations based on user input. The `reducer` function handles the state updates based on different actions dispatched by the components.

## Available Actions

The following actions are available for state updates:

- `ADD_DIGITS`: Add a digit to the current operand.
- `CHOOSE_OPERATION`: Choose an operation for the calculation.
- `CLEAR`: Clear the calculator's display and reset the operands.
- `DELETE_DIGITS`: Delete the last entered digit.
- `EVALUATE`: Evaluate the expression and display the result.

## Contributing

Contributions to the calculator app are welcome. If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
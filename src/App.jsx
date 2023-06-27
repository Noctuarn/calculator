import { useReducer } from "react";
import "./App.scss";
import DigitButton from "./components/DigitButton";
import OperationButton from "./components/OperationButton";

const ACTIONS = {
  ADD_DIGITS: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGITS: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGITS:
      if(state.overwrite){
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false
        }
      }
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) {
        return state;
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        return state;
      }

      return {
        ...state, 
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      };
  
    case ACTIONS.DELETE_DIGITS:
      if(state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null
        }
      }

      if(state.currentOperand == null) return state;

      if(state.currentOperand.length === 1) {
        return {
          ...state,
          currentOperand: null
        }
      }

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      }
    }
}

function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);

  if (isNaN(prev) || isNaN(curr)) return "";
  let computation = "";

  switch (operation) {
    case "+":
      computation = prev + curr;
      break;

    case "-":
      computation = prev - curr;
      break;

    case "*":
      computation = prev * curr;
      break;

    case "/":
      computation = prev / curr;
      break;
  }

  return computation.toString();
}

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="body">

    <h1 className="title">My calculator</h1>

      <div className="calculator">
        <div className="calculator__output">
          <div className="calculator__prev-operand">
            {previousOperand} {operation}
          </div>
          <div className="calculator__curr-operand">{currentOperand}</div>
        </div>
        <button
          onClick={() => {
            dispatch({ type: ACTIONS.CLEAR });
          }}
          className="calculator__button calculator__button_big calculator__button_gray"
        >
          C
        </button>
        <button onClick={() => {dispatch({type: ACTIONS.DELETE_DIGITS})}} className="calculator__button calculator__button_gray">DEL</button>
        <OperationButton dispatch={dispatch} operation="/" />

        <DigitButton dispatch={dispatch} digit="1" />
        <DigitButton dispatch={dispatch} digit="2" />
        <DigitButton dispatch={dispatch} digit="3" />

        <OperationButton dispatch={dispatch} operation="*" />

        <DigitButton dispatch={dispatch} digit="4" />
        <DigitButton dispatch={dispatch} digit="5" />
        <DigitButton dispatch={dispatch} digit="6" />

        <OperationButton dispatch={dispatch} operation="+" />

        <DigitButton dispatch={dispatch} digit="7" />
        <DigitButton dispatch={dispatch} digit="8" />
        <DigitButton dispatch={dispatch} digit="9" />

        <OperationButton dispatch={dispatch} operation="-" />
        <DigitButton dispatch={dispatch} digit="." />
        <DigitButton dispatch={dispatch} digit="0" />

        <button
          onClick={() => {
            dispatch({ type: ACTIONS.EVALUATE });
          }}
          className="calculator__button calculator__button_big calculator__button_light-blue"
        >
          =
        </button>
      </div>
    </div>
  );
}

export { ACTIONS };
export default App;

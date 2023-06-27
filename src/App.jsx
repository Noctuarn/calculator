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
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;

      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };
      
    case ACTIONS.CLEAR:
      return {}
  
    }
}
function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="body">
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
          className="calculator__button calculator__button_big"
        >
          AC
        </button>
        <button className="calculator__button">DEL</button>
        <OperationButton dispatch={dispatch} operation="-" />

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
        <button className="calculator__button calculator__button_big">=</button>
      </div>
    </div>
  );
}

export { ACTIONS };
export default App;

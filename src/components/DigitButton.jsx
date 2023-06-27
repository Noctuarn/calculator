import { ACTIONS } from "../App";

export default function DigitButton(props) {
  let { dispatch, digit } = props;

  return (
    <button
      className="calculator__button"
      onClick={() => {
        dispatch({ type: ACTIONS.ADD_DIGITS, payload: { digit } });
      }}
    >
      {digit}
    </button>
  );
}

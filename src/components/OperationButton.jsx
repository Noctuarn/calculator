import { ACTIONS } from "../App";

export default function OperationButton(props){
    let {dispatch, operation} = props;

    return (
        <button
          className="calculator__button"
          onClick={() => {
            dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
          }}
        >
          {operation}
        </button>
      );
}   
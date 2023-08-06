//? **********44444444**** tüketme kullanma usesellector hook içinde yapılır****
import { useSelector, useDispatch } from "react-redux";
//? ***********************************************************
import "./Counter.css";
import {
  CLR,
  DEC,
  INC,
  clear,
  decrement,
  increment,
} from "../../store/counterReducer";

const Counter = () => {
  //? ??************444444444
  //? global state okunması
  // const count = useSelector((state) => state.count);

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch(); //kostom redux hook
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{count}</h1>
      <div>
        <button
          className="counter-button positive"
          // onClick={() => dispatch({ type: INC })}
          onClick={() => dispatch(increment())}
          //? ********************************************
        >
          increase
        </button>
        <button
          className="counter-button zero"
          // onClick={() => dispatch({ type: CLR })}
          onClick={() => dispatch(clear())}
          //? ********************************************
        >
          reset
        </button>
        <button
          className="counter-button negative"
          // onClick={() => dispatch({ type: DEC })}
          onClick={() => dispatch(decrement())}
          //? ***********************************************
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;

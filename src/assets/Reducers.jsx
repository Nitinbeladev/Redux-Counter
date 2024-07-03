import React, { useReducer } from "react";

const intialState = {
  countState: 0,
  price: 1000,
};

const reducer = (state = intialState, action) => {
  switch (action) {
    case "increase":
      return { ...state, countState: state.countState + 1 };
    case "decrease":
      return { ...state, countState: state.countState - 1 };
    case "priceInc":
      return { ...state, price: state.price + 250 };
    case "pricedec":
      return { ...state, price: state.price - 250 };

    default:
      return state;
  }
};

function Reducers() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h1>{count.countState}</h1>
      <button onClick={() => dispatch("increase")}>Increment</button>
      <button onClick={() => dispatch("decrease")}>Decrement</button>

      <h2>{count.price}/-</h2>
      <button onClick={() => dispatch("priceInc")}>Increment</button>
      <button onClick={() => dispatch("pricedec")}>Decrement</button>
    </div>
  );
}

export default Reducers;

import React, { useContext } from "react";
import { CounterContext } from "./Context";

function CounterSecondButtons() {
  const inc = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => inc.setMainval(inc.Mainval + 100)}>
        increase by 100
      </button>
      <button onClick={() => inc.setMainval(inc.Mainval - 100)}>
        decrease by 100
      </button>
    </div>
  );
}

export default CounterSecondButtons;

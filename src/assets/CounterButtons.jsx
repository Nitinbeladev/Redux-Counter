import React, { useContext } from "react";
import { CounterContext } from "./Context";

function CounterButtons() {
  const Count_val = useContext(CounterContext);
  console.log(Count_val);

  return (
    <div>
      <button onClick={() => Count_val.setMainval(Count_val.Mainval + 1)}>
        Increase
      </button>
      <button onClick={() => Count_val.setMainval(Count_val.Mainval - 1)}>
        Decrease
      </button>
      {/* <h3>the name is {Count_val.OBJ[0].name}</h3> */}
    </div>
  );
}

export default CounterButtons;

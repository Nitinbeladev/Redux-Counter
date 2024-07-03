import { useState } from "react";

function useCounter(initalvalue = 0) {
  const [value, setvalue] = useState(initalvalue);

  const increase = () => {
    setvalue(value + 1);
  };
  const decrease = () => {
    setvalue(value - 1);
  };
  return [value, increase, decrease];
}

export default useCounter;

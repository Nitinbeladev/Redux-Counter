import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterContextProvider = (props) => {
  const OBJ = [
    { name: "Nitin", age: 34 },
    { name: "Vikas", age: 21 },
  ];

  const [Mainval, setMainval] = useState(0);

  return (
    <CounterContext.Provider value={{ OBJ, Mainval, setMainval }}>
      {props.children}
    </CounterContext.Provider>
  );
};

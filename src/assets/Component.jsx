import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Comp.css";

function Component({ val, Changer }) {
  const [toggle, settoggle] = useState("");

  const Active = (num) => {
    settoggle(num);
  };

  return (
    <>
      <header className="flex gap-5 p-1 bg-amber-500 text-cyan-50">
        <div
          className={toggle === 0 ? "active" : "inactive"}
          onClick={() => {
            Active(0);
          }}
        >
          Home
        </div>
        <div
          className={toggle === 1 ? "active" : "inactive"}
          onClick={() => {
            Active(1);
          }}
        >
          About
        </div>
        <div
          className={toggle === 2 ? "active" : "inactive"}
          onClick={() => {
            Active(2);
          }}
        >
          Contact
        </div>
        <div
          className={toggle === 3 ? "active" : "inactive"}
          onClick={() => {
            Active(3);
          }}
        >
          Services
        </div>
        <h1>the current value is {val}</h1>
      </header>
      <button onClick={Changer}>Click</button>
    </>
  );
}

export default Component;

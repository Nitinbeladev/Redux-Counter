import React from "react";
import Prompt from "./Prompt";

function Backdrop({ toggle }) {
  return (
    <div
      className="w-full h-full absolute top-10  left-0 bg-slate-400 bg-opacity-10"
      onClick={toggle}
    >
      <Prompt />
    </div>
  );
}

export default Backdrop;

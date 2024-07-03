import { memo } from "react";
import React from "react";

function NewButton({ increaseTwo, value1 }) {
  console.log("Second Component rendered");
  return (
    <div>
      <button onClick={increaseTwo}>
        increment <span>{value1}</span>
      </button>
    </div>
  );
}

export default memo(NewButton);

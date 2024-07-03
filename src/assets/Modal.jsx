import React from "react";
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import Prompt from "./Prompt";

function Modal({ toggle }) {
  return (
    <div>
      {createPortal(
        <Backdrop toggle={toggle} />,
        document.getElementById("Backdrop")
      )}
    </div>
  );
}

export default Modal;

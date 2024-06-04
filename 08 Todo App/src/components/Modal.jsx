import React, { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialog = React.useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      {children}
      <form method="dialog" className="mt-4 bg-stone-800">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;

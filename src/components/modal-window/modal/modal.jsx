import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyle from "./modal.module.scss";
import ModalOverlay from "../modal-overlay/modal-overlay";

const Modal = ({ children, onClose }) => {
  const modalRoot = document.getElementById("modals");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  },[onClose]);

  return ReactDOM.createPortal(
    <div className={modalStyle.ModalOverlay}>
      <ModalOverlay onClose={onClose} />
      <div className={modalStyle.modal}>
        <button className={modalStyle.button} onClick={onClose}>
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

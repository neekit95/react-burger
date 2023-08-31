import React from "react";
import  ReactDOM  from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyle from "./modal.module.scss";
import ModalOverlay from "../modal-overlay/modal-overlay";

const Modal = ({ children, onClose }) => {
  const modalRoot = document.getElementById("modals");

  return ReactDOM.createPortal(
    <div className={modalStyle.modal}>
      <ModalOverlay onClose={onClose} />
      <button className={modalStyle.button} onClick={onClose}>
        <CloseIcon />
      </button>
      {children}
    </div>,
    modalRoot
  );
};

export default Modal;

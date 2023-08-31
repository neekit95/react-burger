import React from "react";
import { ReactDOM } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyle from "./modal.module.scss";
import ModalOverlay from "../modal-overlay/modal-overlay";

const Modal = ({ children, onClose }) => {
  const modalRoot = document.getElementById("modals");
  return ReactDOM.createPortal(
    <div>
      <ModalOverlay />
      <button className={modalStyle.button} onClose={onClose}>
        <CloseIcon />
      </button>
      {children}
    </div>,
    modalRoot
  );
};

export default Modal;

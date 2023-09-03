import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyle from "./modal.module.scss";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from 'prop-types';

const Modal = ({ children, onClose }) => {
  const modalRoot = document.getElementById("modals");
 

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };

  },[onClose]);

  // console.log("Modal is open"); 
  console.log("Modal content:", children);

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

Modal.propTypes = {
  children: PropTypes.node, 
  onClose: PropTypes.func, 
};
export default Modal;

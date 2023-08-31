import React from "react";
import overlayStyle from "./modal-overlay.module.scss";

const ModalOverlay = ({ onClose }) => {
  return <div className={overlayStyle.overlay} onClick={onClose}></div>;
};

export default ModalOverlay;

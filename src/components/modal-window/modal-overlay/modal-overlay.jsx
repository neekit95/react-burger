import React from "react";
import overlayStyle from "./modal-overlay.module.scss";

const ModalOverlay = ({ onClose }) => {
  return <main className={overlayStyle.main} onClick={onClose}></main>;
};

export default ModalOverlay;

import React from "react";
import overlayStyle from "./modal-overlay.module.scss";
import PropTypes from 'prop-types';

const ModalOverlay = ({ onClose }) => {
  return <div className={overlayStyle.overlay} onClick={onClose}></div>;
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func
};
export default ModalOverlay;

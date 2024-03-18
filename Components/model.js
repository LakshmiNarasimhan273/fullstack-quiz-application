import React from 'react';

const Modal = ({ show, onClose, onSubmit, children }) => {
  const overlayStyle = {
    display: show ? 'block' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    zIndex: 1001,
    width:1000,
    height:600,
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        {children}
        <button onClick={onClose}></button>
      </div>
    </div>
  );
};

export default Modal;

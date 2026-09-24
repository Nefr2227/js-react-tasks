import React from 'react';
import cn from 'classnames';

const Modal = ({ isOpen, children }) => (
  <div
    className={cn('modal', { fade: isOpen, show: isOpen })}
    style={{ display: isOpen ? 'block' : 'none' }}
    role="dialog"
  >
    <div className="modal-dialog">
      <div className="modal-content">{children}</div>
    </div>
  </div>
);

Modal.Header = ({ toggle, children }) => (
  <div className="modal-header">
    <h5 className="modal-title">{children}</h5>
    <button
      type="button"
      className="btn-close"
      onClick={toggle}
      aria-label="Close"
    />
  </div>
);

Modal.Body = ({ children }) => (
  <div className="modal-body">{children}</div>
);

Modal.Footer = ({ children }) => (
  <div className="modal-footer">{children}</div>
);

export default Modal;
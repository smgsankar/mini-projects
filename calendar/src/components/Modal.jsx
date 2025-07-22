import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export function Modal({ children, open, onClose }) {
  const dialogRef = useRef();

  const backdropClick = (e) => {
    if (e.target === dialogRef.current) onClose();
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (open) dialogRef.current.showModal();
    else dialogRef.current.close();
  }, [open]);

  return (
    <dialog
      className="focus-visible:outline-none rounded-xl bg-dark-surface backdrop:bg-black backdrop:opacity-50"
      ref={dialogRef}
      onClick={backdropClick}
    >
      <div onClick={stopPropagation} className="text-accent-white">
        {children}
      </div>
    </dialog>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

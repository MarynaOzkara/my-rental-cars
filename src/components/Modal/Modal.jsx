import ReactModal from "react-modal";
import "./Modal.css";
import { ReactComponent as Close } from "../../assets/close.svg";

const ModalDrop = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName="modal-overlay"
      className="modal-content"
      ariaHideApp={false}
      onRequestClose={() => onClose()}
    >
      <button className="modal-close-btn" onClick={() => onClose()}>
        <Close />
      </button>
      {children}
    </ReactModal>
  );
};

export default ModalDrop;

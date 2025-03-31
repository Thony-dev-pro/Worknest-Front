import '../../assets/styles/css/modal.css'

interface ModalProps {
    titre : string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }

const Modal = ({ titre,isOpen, onClose, children }:ModalProps) => {
    if(!isOpen) return null;
    return (
      <div className="modal-overlay">
        <div className="notepad-modal-content">
            <div className="notepad-modal-header">
                <h3 className="notepad-modal-title">{titre}</h3>
                <button className="notepad-close-btn" onClick={onClose}>&times;</button>
            </div>
            
            {children}
            
            <div className="notepad-modal-actions">
                <button className="btn">Enregistrer</button>
                <button className="btn btn-cancel" onClick={onClose}>Annuler</button>
            </div>
        </div>
      </div>
    );
};

export default Modal;


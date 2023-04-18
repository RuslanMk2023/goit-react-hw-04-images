import { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

export const Modal = ({ largeImageURL, closeModal }) => {
  const pressedEsc = event => event.key === 'Escape' && closeModal();

  useEffect(() => {
    document.addEventListener('keydown', pressedEsc, false);

    return () => {
      document.removeEventListener('keydown', pressedEsc, false);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id="modal-overlay"
      onClick={() => closeModal()}
      className={styles.overlay}
    >
      <div className={styles.modal}>
        <img src={largeImageURL} alt="modal-img" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

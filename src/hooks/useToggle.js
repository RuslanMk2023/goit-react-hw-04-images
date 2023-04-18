import {useState } from 'react';

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalImageURL, setImageURL] = useState('');

  const openModal = (imageURL) => {
    setIsOpen(true);
    setImageURL(imageURL);
  }
  const closeModal= () => setIsOpen(false);
  const toggleModal = () => setIsOpen(isOpen => !isOpen);

  return { isOpen, openModal, closeModal, toggleModal, modalImageURL};
};
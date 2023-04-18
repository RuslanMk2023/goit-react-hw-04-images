import PropTypes from 'prop-types';

import {useImg} from 'components/App.jsx'

import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ index }) => {
  const { imgsFromApi, openModal } = useImg();
  const { id, webformatURL, largeImageURL } = imgsFromApi[index];

  return (
    <li key={id} className={styles.imageGalleryItem}>
      <img
        className={styles.imageGalleryItem_image}
        onClick={() => openModal(largeImageURL)}
        src={webformatURL}
        alt={`img-${id}`}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  index: PropTypes.number.isRequired,
};

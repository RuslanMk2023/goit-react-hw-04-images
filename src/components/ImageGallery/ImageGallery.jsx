import { ImageGalleryItem } from './ImageGalleryItem';

import {useImg} from 'components/App.jsx'

import styles from './ImageGallery.module.css';

export const ImageGallery = () => {
  const { imgsFromApi} = useImg();

  return <ul className={styles.imageGallery}>
    {imgsFromApi.map(( _, index) => (
      <ImageGalleryItem key={index} index={index} />
    ))}
  </ul>
};
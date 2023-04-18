import { useEffect, useState, createContext, useContext } from 'react';

import {
  ImageGallery,
  Loader,
  Modal,
  Searchbar,
  Button,
  ErrorMessege,
} from 'components';

import { getImagesFromPixabay } from 'api/getImagesFromPixabay';
import { useToggle } from 'hooks/useToggle';

import styles from './App.module.css';

const ImgsContext = createContext();
export const useImg = () => useContext(ImgsContext);

export const App = () => {
  const [imgsFromApi, setImgsFromApi] = useState([]);
  const [pageCounter, setPageCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const {isOpen, openModal, closeModal, modalImageURL } = useToggle();

  useEffect( ()=>{
    if (pageCounter > 0) {
      getImgFromApi();
      window.scrollTo(0, document.body.scrollHeight);
    }},
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [pageCounter, searchText] )

  const loadMore = () => setPageCounter(pageCounter + 1 );

  const getSearch = searchInputText => {
    if (searchText !== searchInputText) {
      setSearchText(searchInputText)
      setImgsFromApi([])
      setPageCounter(1)
    }
  };

  const getImgFromApi = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const newImgData = await getImagesFromPixabay(pageCounter, searchText);
      setImgsFromApi([...imgsFromApi, ...newImgData]);
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.App}>
      <Searchbar getSearch={getSearch} />

      {error && <ErrorMessege error={error} />}

      {imgsFromApi.length > 0 && (
        <ImgsContext.Provider value={{ imgsFromApi, openModal }}>
          <ImageGallery/>
        </ImgsContext.Provider>
      )}

      {isLoading 
        ? <Loader />
        : imgsFromApi.length > 0 &&  <Button onClick={loadMore} tittle={'Load more'} />}

      {isOpen && <Modal largeImageURL={modalImageURL} closeModal={closeModal} />}
    </div>
  );
};
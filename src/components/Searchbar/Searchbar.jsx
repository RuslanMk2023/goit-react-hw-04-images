import PropTypes from 'prop-types';
import React from 'react';

import styles from './Searchbar.module.css';

export const Searchbar = ({ getSearch }) => {
  const submitHandler = evn => {
    evn.preventDefault();
    const form = evn.currentTarget;
    const searchStr = form.elements.searchInput.value;
    getSearch(searchStr);
  };

  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={submitHandler}>
        <button type="submit" className={styles.searchForm_button}>
          <span className={styles.searchForm_button__label}>Search</span>
        </button>

        <input
          className={styles.searchForm_button__input}
          name="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  getSearch: PropTypes.func.isRequired,
};

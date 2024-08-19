import React from 'react';
import { useGlobalContext } from '../context/context';

const SearchForm = () => {
  const { setSearchPhoto } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    setSearchPhoto(searchValue);
  };

  return (
    <section className="title">
      <h1>Unsplash Images</h1>

      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // You can perform additional logic here before calling onSearch
    // onSearch(searchQuery);
  };

  return (
    <div className="search-bar container">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-outline-success" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
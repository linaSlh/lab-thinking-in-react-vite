import React from 'react';

function SearchBar(props) {
  const handleSelect = (e) => {
    props.filterProducts(e.target.value);
  };

  return (
    <div>
      <div>search</div>
      <input onChange={handleSelect}></input>
    </div>
  );
}

export default SearchBar;

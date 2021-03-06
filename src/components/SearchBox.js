import React from "react";

const SearchBox = ({searchField, searchChange}) => {
  console.log('SearchBox');
  
  return (
    <div className="col-12 text-center my-4">
      <input className=' mt-3' aria-label="Search for Robots" type="search" placeholder="Search Robots" onChange={searchChange} />
    </div>
  );
};

export default SearchBox;

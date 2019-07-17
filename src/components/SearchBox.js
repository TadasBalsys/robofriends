import React from "react";

const SearchBox = ({searchField, searchChange}) => {
  console.log('SearchBox');
  
  return (
    <div className="col-12 text-center my-4">
      <input className='w-25 mt-3' type="search" placeholder="Search Robots" onChange={searchChange} />
    </div>
  );
};

export default SearchBox;

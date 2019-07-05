import React from "react";

const SearchBox = ({searchField, searchChange}) => {
  return (
    <div className="col-12 text-center my-5">
      <h1>RoboFriends</h1>
      <input className='w-25 mt-3' type="search" placeholder="Search Robots" onChange={searchChange} />
    </div>
  );
};

export default SearchBox;

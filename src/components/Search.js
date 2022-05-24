import React, { useState } from "react";
import SearchButton from "./SearchButton";
//import Bookings from "./Bookings";

const Search = props => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = event => {
    console.log(searchInput);
    setSearchInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    //console.log(searchInput);
    props.search(searchInput);
  };

  return (
    <div className="search">
      <div className="page-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      <div className="row search-wrapper">
        <div className="col">
          <form onSubmit={handleSubmit} className="form-group search-box">
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
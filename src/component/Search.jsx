import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation()
  const navigate = useNavigate();
  const [product_name, setQ] = useState("")
  

  const searchHandler = (e) => {
    e.preventDefault()
      setQ(e.target.search.value)
      console.log(product_name)
      navigate(`/search?product_name=${(e.target.search.value).toLowerCase()}`)   
  };

  useEffect(() => {
    if(location.search.length === 0) {
      setQ("")
      console.log(product_name)
    }
  }, [location, product_name])

  // console.log("my product_name", product_name);

  return (
    <form onSubmit={searchHandler}>
      <div className="input-group">
        <div className="search-wrapper">
          <button id="search_btn" className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="feather feather-search"
              viewBox="0 0 24 24"
              type="submit"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          </button>

          <input
            type="search"
            id="search_field"
            className="search-input"
            placeholder="Search ..."
            autoComplete="off"
            name="search"
            defaultValue={product_name}
          />
        </div>
      </div>
    </form>
    
  );
};

export default Search;

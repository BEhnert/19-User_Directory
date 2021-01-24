import React from "react";
import "../styles/Search.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
        />
      </div>
    </form>
  );
}

export default SearchForm;

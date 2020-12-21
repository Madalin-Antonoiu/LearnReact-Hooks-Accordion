import React, { useState, useEffect } from "react";

const Search = ({ label, data }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    data(term); //pass it as props to the parent
  };

  console.log("I run with every render!");

  // Case 1 - Initial render
  // useEffect(() => {
  //   console.log("I only run once!");
  // }, []);

  // Case 2 - Initial render + after every rerender
  // useEffect(() => {
  //   console.log("I run after every render and at initial render!");
  // });

  // Case 3 - Initial render + IF DATA CHANGED since last render, after every rerender
  // can have another value in there, will execute if either of the two change
  useEffect(() => {
    console.log("I only run once!");
  }, [term]);

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>{label}</label>
          <br />
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            placeholder="Type and press Enter"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;

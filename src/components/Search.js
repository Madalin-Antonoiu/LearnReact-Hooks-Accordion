import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = ({ label, data }) => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    data(term); //pass it as props to the parent
  };

  useEffect(() => {
    const search = async () => {
      //https://en.wikipedia.org/w/api.php//?action=query&list=search&format=json&origin=*&srsearch=programming
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term
        }
      });
      setResults(data.query.search);
    };

    // Possible too, if i dont want to provide an initial search term
    if (term) {
      search();
    }
    //search();
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div className="search-bar ui segment">
      <form className="ui form">
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

      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;

import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = ({ label, data }) => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (term) {
      const timerId = setTimeout(() => {
        setDebouncedTerm(term);
      }, 500);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [term]);

  useEffect(() => {
    const search = async () => {
      //https://en.wikipedia.org/w/api.php//?action=query&list=search&format=json&origin=*&srsearch=programming
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: debouncedTerm
        }
      });
      setResults(data.query.search);
    };
    if (debouncedTerm) {
      search();
    }
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
            target="_blank"
            rel="noopener noreferrer"
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
      <div className="field">
        <label>{label}</label>
        <br />
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="Type for instant Wikipedia search"
        />
      </div>

      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;

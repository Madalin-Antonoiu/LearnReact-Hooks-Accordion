import React from "react";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <a href="/" className="item">
        Accordion
      </a>
      <a href="/list" className="item">
        List
      </a>
      <a href="/search" className="item">
        WikiSearch
      </a>
      <a href="/translate" className="item">
        Translate
      </a>
    </div>
  );
};

export default Header;

// Version 1 is bad because we completely reload entire html doc
// Ideal it would be not to do a full page reload, only component reload

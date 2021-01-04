import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/list" className="item">
        List
      </Link>
      <Link href="/search" className="item">
        WikiSearch
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;

// Version 1 is bad because we completely reload entire html doc
// Ideal it would be not to do a full page reload, only component reload

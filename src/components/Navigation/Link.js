import React from "react";

export default ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault(); // prevent full page reload
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

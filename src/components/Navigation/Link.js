import React from "react";

export default ({ className, href, children }) => {
  const onClick = (event) => {
    event.preventDefault(); // prevent full page reload
    window.history.pushState({}, "", href); // needed for keeping url in sync, after preventing default link behavior

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

import React from "react";

export default ({ className, href, children }) => {
  const onClick = (event) => {
    //Restoring CTRL+ Click opens new page
    if (event.metaKey || event.ctrlKey) {
      return;
    }

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

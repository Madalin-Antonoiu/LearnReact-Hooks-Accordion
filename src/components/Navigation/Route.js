// Not used any JSX yet, no need to import React
//import React from "react";

// children is received from children component passed to Route, aka <Dropdown /> etc
const Route = ({ path, children }) => {
  return window.location.pathname === path ? children : null;
};

export default Route;

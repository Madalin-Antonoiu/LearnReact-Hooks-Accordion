// Not used any JSX yet, no need to import React
//import React from "react";
import { useEffect, useState } from "react";

// children is received from children component passed to Route, aka <Dropdown /> etc
const Route = ({ path, children }) => {
  //We do this state for the sole purpose of rerendering Route
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      //console.log("Location Change");
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    // Clean up the event listener when we stop showing the component on the screen
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []); // Reminder: [] means run only once on render

  return currentPath === path ? children : null;
};

export default Route;

// we will get 4 calls of console log but that`s fine for this stage

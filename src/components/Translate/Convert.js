import React, { useState, useEffect } from "react";

export default ({ language, text }) => {
  // Anytime we get new language or text, we run the function below
  useEffect(() => {
    console.log("New language or text");
  }, [language, text]);
  return <div></div>;
};

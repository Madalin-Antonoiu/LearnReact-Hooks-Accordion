import React, { useState } from "react";
import Accordion from "./Accordion";
import WikiSearch from "./WikiSearch";
import Dropdown from "./Dropdown";
import Translate from "./Translate/Translate";

const items = [
  {
    title: "What is React?",
    content: "React is a modern JavaScript framework."
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers."
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components."
  }
];
const options = [
  {
    label: "The Color is Red",
    value: "red"
  },
  {
    label: "The Color is Green",
    value: "green"
  },
  {
    label: "The Color is Blue",
    value: "blue"
  }
];

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};
const showList = () => {
  if (window.location.pathname === "/list") {
    return <WikiSearch />;
  }
};
const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown options={options} />;
  }
};
const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
};

export default () => {
  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};

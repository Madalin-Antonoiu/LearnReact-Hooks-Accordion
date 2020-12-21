import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

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

export default () => {
  const onSearchSubmit = (props) => {
    console.log("From App.js!", props);
  };

  return (
    <div className="ui container">
      <Accordion items={items} />
      <br />
      <Search label="Search Wikipedia.org" data={onSearchSubmit} />
    </div>
  );
};

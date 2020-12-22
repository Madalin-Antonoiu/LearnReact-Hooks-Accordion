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
  return (
    <div className="ui container">
      <div className="title">
        Accordion Widget
        <Accordion items={items} />
      </div>
      <br />
      <div className="title">
        Search Wikipedia Widget
        <Search label="Search Wikipedia.org" />
      </div>
    </div>
  );
};

import React, { useState } from "react";
// import Accordion from "./Accordion";
// import WikiSearch from "./WikiSearch";
import Dropdown from "./Dropdown";

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

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <div className="ui segment">
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </div>

      {/* <div className="ui segment">
        Accordion Widget
        <Accordion items={items} />
      </div>
      <div className="ui segment">
        Wikipedia Widget
        <WikiSearch label="Search Wikipedia.org" />
      </div> */}
    </div>
  );
};

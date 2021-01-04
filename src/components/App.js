import React, { useState } from "react";
import Accordion from "./Accordion";
import WikiSearch from "./WikiSearch";
import Dropdown from "./Dropdown";
import Translate from "./Translate/Translate";
import Route from "./Route";

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
    <div>
      <Route path="/">
        <Accordion items={items} />;
      </Route>

      <Route path="/list">
        <WikiSearch />;
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path="/translate">
        <Translate />;
      </Route>
    </div>
  );
};

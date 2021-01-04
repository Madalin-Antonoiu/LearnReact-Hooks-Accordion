import React, { useState } from "react";
import Dropdown from "../Dropdown";
import Convert from "./Convert";

// Pass options down to Dropdown so user can select one
const options = [
  {
    label: "Afrikaans",
    value: "af"
  },
  {
    label: "Spanish",
    value: "sp"
  },
  {
    label: "Romanian",
    value: "ro"
  }
];

export default () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>

      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select a language"
      />
      <hr />
      <h3 className="header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

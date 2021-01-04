import React, { useState } from "react";
import Dropdown from "../Dropdown";
import Convert from "./Convert";
import Input from "../Input";

// Pass options down to Dropdown so user can select one
const options = [
  {
    label: "Afrikaans",
    value: "af"
  },
  {
    label: "Spanish",
    value: "es"
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
      <Input text={text} setText={setText} />

      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select a language"
      />

      <Convert text={text} language={language} />
    </div>
  );
};

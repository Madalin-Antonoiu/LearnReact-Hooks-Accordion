import React from "react";

export default ({ text, setText }) => {
  return (
    <div className="ui form">
      <div className="field">
        <label>Enter Text</label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

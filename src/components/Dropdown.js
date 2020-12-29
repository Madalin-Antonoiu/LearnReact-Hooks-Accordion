import React, { useState, useEffect, useRef } from "react";

export default ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const list = options.map((option) => {
    if (option.value === selected.value) {
      return null; // Don't render anything
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  useEffect(() => {
    document.body.addEventListener(
      "click",
      (event) => {
        //console.log(event.target);
        if (ref.current && ref.current.contains(event.target)) {
          return;
        }

        //otherwise, the click wasn't inside the component
        //close the dropdown
        setOpen(false);
      },
      { capture: true }
    );
  });

  //console.log(ref.current);

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {list}
          </div>
        </div>
      </div>
    </div>
  );
};

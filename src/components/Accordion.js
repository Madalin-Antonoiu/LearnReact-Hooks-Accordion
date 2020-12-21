import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    //console.log("Title clicked", index);
    setActiveIndex(index);
  };

  const list = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {list}
      <h2>{activeIndex}</h2>
    </div>
  );
};

export default Accordion;

// React.Fragment instead of wrapping div gets rid of double top border line
// index is the second argument to the map function

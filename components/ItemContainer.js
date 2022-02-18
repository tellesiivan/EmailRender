import * as React from "react";
import Item from "./Item";
import Chip from "@mui/material/Chip";

export default function ItemContainer({ sections }) {
  if (sections === null) return <p>Add sections </p>;

  console.log(sections);
  return (
    <ul className="itemCont">
      <div className="itemContTop">
        <div className="itemContBtm">
          {sections.map((section) => (
            <Chip
              label={section.id}
              size="small"
              className="topChip"
              key={section.id}
            />
          ))}
        </div>
        <div className="render">
          <button>Render HTML</button>
        </div>
      </div>
      {sections.map((section) => (
        <Item key={section.id} details={section} />
      ))}
    </ul>
  );
}

import Chip from "@mui/material/Chip";

export default function Item({ details }) {
  function limit(string = "", limit = 0) {
    return `${string.substring(0, limit)}...`;
  }

  const link = limit(details.link, 26);
  const src = limit(details.imgSrc, 30);

  return (
    <li className="itemSect">
      <Chip label={details.id} size="small" className="chip" />
      <div className="itemSectDetails">
        <div className="itemSectDetailsDiv">
          <span>Link</span>
          <p>{link}</p>
        </div>
        <div className="itemSectDetailsDiv">
          <span>Image Source</span>
          <p>{src}</p>
        </div>
        {details.imgAlt && (
          <div className="itemSectDetailsDiv">
            <span>Alt Desc.</span>
            <p>{limit(details.imgAlt, 30)}</p>
          </div>
        )}
      </div>
    </li>
  );
}

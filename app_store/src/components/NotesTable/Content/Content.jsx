import React from "react";
import Row from "./Row/Row";
import { useSelector } from "react-redux";
import { filteredList } from "./Row/helpers";
import "./Row/Row.css";

const Content = ({ trigger }) => {
  const rows = useSelector((state) => state.lists.lists);
  const filteredElements = filteredList(rows, trigger);
  return (
    <>
      {filteredElements.length > 0 ? (
        <>
          {filteredElements.map((row) => {
            return (
              <div key={row.id}>
                <Row trigger={trigger} row={row} />
              </div>
            );
          })}
        </>
      ) : (
        <div className="noContent">No content...</div>
      )}
    </>
  );
};
;

export default Content;


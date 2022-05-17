import React from "react";
import "./Row.css";
import { getContentDates } from "./helpers";
import { CATEGORY_IMG } from "../../../../reducers/helpers";
import { useDispatch } from "react-redux";
import {
  addArchiveList,
  deleteList,
  visibilityModalWindow,
} from "../../../../reducers/actions/actions";
import classNames from "classnames";

const Row = (props) => {
  const { id, category, name, created, content } = props.row;
  const trigger = props.trigger;

  const datesContent = getContentDates(content);

  const dispatch = useDispatch();

  const actionWithArchive = () => {
    dispatch(addArchiveList(id));
  };
  const deleteElement = () => {
    dispatch(deleteList(id));
  };
  const editElement = () => {
    dispatch(visibilityModalWindow({ visible: true, id: id }));
  };

  return (
    <>
      <div
        className={classNames("block", {
          block_style: !trigger,
          block_styleArchive: trigger,
        })}
      >
        <div className="icon">
          <div className="circle_icon">
            <i className={CATEGORY_IMG[category]} />
          </div>
        </div>
        <div className="name">
          <p title={name}>{name}</p>
        </div>
        <div className="created">
          <p title={created}>{created}</p>
        </div>
        <div className="category">
          <p title={category}>{category}</p>
        </div>
        <div className="content">
          <p title={content}>{content}</p>
        </div>
        <div className="dates">
          <p title={datesContent}>{datesContent}</p>
        </div>
        <div className="tools">
          {!trigger ? (
            <i onClick={editElement} className="fa-solid fa-pen" />
          ) : (
            ""
          )}
          <i
            onClick={actionWithArchive}
            className={classNames("fa-solid fa-box-archive", {
              iArchive: trigger,
            })}
          />
          <i onClick={deleteElement} className="fa-solid fa-trash" />
        </div>
      </div>
    </>
  );
};
export default Row;

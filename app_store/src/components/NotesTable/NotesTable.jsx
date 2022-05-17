import React, { useState } from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import styles from "./Button.module.css";
import { useDispatch } from "react-redux";
import { visibilityModalWindow } from "../../reducers/actions/actions";

const NotesTable = () => {
  const dispatch = useDispatch();

  const [trigger, setTrigger] = useState(false);

  const openModal = () => {
    dispatch(visibilityModalWindow({ visible: true, id: null }));
  };

  return (
    <div>
      <Header trigger={trigger} setTrigger={setTrigger} />
      <Content trigger={trigger} />
      {!trigger ? (
        <button onClick={openModal} className={styles.buttonStyle}>
          Create Note
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NotesTable;

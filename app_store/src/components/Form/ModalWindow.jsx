import React, { useEffect, useState } from "react";
import "./Form.css";
import { CATEGORY } from "../../reducers/helpers";
import { useDispatch, useSelector } from "react-redux";
import { checkValidation, getDateNow } from "../NotesTable/Content/Row/helpers";

import classNames from "classnames";
import {
  addList,
  editList,
  visibilityModalWindow,
} from "../../reducers/actions/actions";

const ModalWindow = () => {
  let defaultState = {
    name: "",
    category: "Random Thought",
    content: "",
    archive: false,
  };
  const dispatch = useDispatch();
  const { visible, id } = useSelector((state) => state.modals);

  /* const rootClasses = ["modal"];
  if (visible) {
    rootClasses.push("modalActive");
  }*/

  let dataList = useSelector((state) => state.lists.lists);

  const [list, setList] = useState(defaultState);

  useEffect(() => {
    const data = dataList?.reduce(
      (acc, data) => (data.id === id ? { ...acc, ...data } : acc),
      {}
    );

    setList({
      ...list,
      ...defaultState,
      ...data,
    });
  }, [id]);

  const closeModal = () => {
    dispatch(visibilityModalWindow({ visible: false, id: null }));
    inputClass.current = false;
    textareaClass.current = false;
  };

  const createList = (e) => {
    e.preventDefault();
    if (id !== null) {
      dispatch(
        editList({
          ...list,
          id: id,
          created: getDateNow(),
        })
      );
    } else {
      dispatch(
        addList({
          ...list,
          id: Date.now().toString(),
          created: getDateNow(),
        })
      );
    }

    closeModal();
  };

  let inputClass = React.useRef(false);
  let textareaClass = React.useRef(false);

  const inputOnChange = (value) => {
    inputClass.current = checkValidation(value);
    setList({ ...list, name: value });
  };
  const textareaOnChange = (value) => {
    textareaClass.current = checkValidation(value);
    setList({ ...list, content: value });
  };

  return (
    <div className={classNames("modal", { modalActive: visible })}>
      <form>
        <i onClick={closeModal} className="fa-solid fa-xmark fa-2xl" />
        <input
          value={list.name}
          onChange={(e) => inputOnChange(e.target.value)}
          name="name"
          type="text"
          className={classNames(
            "create_form",
            { valid: inputClass.current },
            { invalid: !inputClass.current }
          )}
          placeholder="Name"
          autoComplete="off"
        />

        <select
          value={list.category}
          onChange={(e) => setList({ ...list, category: e.target.value })}
          name="category"
          className="create_form"
        >
          {CATEGORY.map((category) => (
            <option key={"option" + category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <textarea
          value={list.content}
          onChange={(e) => textareaOnChange(e.target.value)}
          name="content"
          className={classNames(
            "create_form",
            { valid: textareaClass.current },
            { invalid: !textareaClass.current }
          )}
          placeholder="Content"
          autoComplete="off"
        />
        <button
          disabled={!(inputClass.current && textareaClass.current)}
          onClick={createList}
          className={classNames(
            "create_button",
            { buttonValid: inputClass.current && textareaClass.current },
            { buttonInvalid: !inputClass.current && !textareaClass.current }
          )}
        >
          {id ? "EDIT" : "CREATE"}
        </button>
      </form>
    </div>
  );
};

export default ModalWindow;

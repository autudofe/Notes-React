import React from "react";
import "./Header.css";
import classNames from "classnames";

const Header = ({ trigger, setTrigger }) => {
  const changeLists = () => {
    trigger ? setTrigger(false) : setTrigger(true);
  };

  return (
    <header>
      <div className="icon ">
        <></>
      </div>
      <div className="name ">
        <p className="header_text_style">Name</p>
      </div>
      <div className="created ">
        <p className="header_text_style">Created</p>
      </div>
      <div className="category ">
        <p className="header_text_style">Category</p>
      </div>
      <div className="content ">
        <p className="header_text_style">Content</p>
      </div>
      <div className="dates ">
        <p className="header_text_style">Dates</p>
      </div>
      <div className="tools ">
        <i
          className={classNames("fa-solid fa-box-archive ", {
            iArchive: trigger,
            iNotArchive: !trigger,
          })}
          onClick={changeLists}
        />
      </div>
    </header>
  );
};

export default Header;

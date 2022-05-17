import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="icon ">
        <></>
      </div>
      <div className="category_statistic">
        <p className="header_text_style">Note Category</p>
      </div>
      <div className="active">
        <p className="header_text_style">Active</p>
      </div>
      <div className="archived ">
        <p className="header_text_style">Archived</p>
      </div>
    </header>
  );
};

export default Header;
import React from "react";
import "./Header.css";
import img from "../../images/image.png";
const Header = ({ headerText, setHeaderText, headerExpanded }) => {
  return (
    <div className="head_container">
      <img
        src={img}
        alt="imgaes"
        className={`head_image ${
          headerExpanded ? "head_image_expanded" : "head_image_contracted"
        }`}
      />
      <h1
        className={`head_text ${
          headerExpanded ? "head_text_expanded" : "head_text_contracted"
        }`}
      >
        {headerText}
      </h1>
    </div>
  );
};

export default Header;

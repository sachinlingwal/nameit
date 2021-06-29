import React from "react";
import "./NameCard.css";

const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";
const NameCard = ({ Names }) => {
  return (
    <a
      className="card_link"
      target="_blank"
      rel="noreferrer"
      href={`${nameCheapUrl}${Names}`}
    >
      <div className="result_name_card">
        <p className="result_name">{Names}</p>
      </div>
    </a>
  );
};

export default NameCard;

import React from "react";
import NameCard from "../nameCard/NameCard";
import "./ResultContainer.css";

const ResultContainer = ({ suggestName }) => {
  const suggesetNameJsx = suggestName.map((Names) => {
    return <NameCard key={Names} Names={Names} />;
  });
  return (
    <div className="result_container">
      <>{suggesetNameJsx}</>
    </div>
  );
};

export default ResultContainer;

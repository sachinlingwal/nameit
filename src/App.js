import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import ResultContainer from "./components/results/ResultContainer";
import SearchBox from "./components/searchBox/SearchBox";
const name = require("@rstacruz/startup-name-generator");

function App() {
  const [headerText, setHeaderText] = useState("Name It!");
  const [headerExpanded, setHeaderExpanded] = useState(true);
  const [suggestName, setSuggestName] = useState([]);

  const handleInputChange = (inputText) => {
    setHeaderExpanded(!inputText);
    setSuggestName(inputText ? name(inputText) : []);
    // setHeaderText();
  };
  // console.log(name("cloud"));
  return (
    <>
      <Header
        headerText={headerText}
        setHeaderText={setHeaderText}
        headerExpanded={headerExpanded}
      />
      <SearchBox handleInputChange={handleInputChange} />
      <ResultContainer suggestName={suggestName} />
    </>
  );
}

export default App;

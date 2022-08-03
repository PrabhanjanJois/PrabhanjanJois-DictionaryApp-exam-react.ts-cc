import "./ComponentStyles.css";
import { useState } from "react";
import axios from "axios"; // using axios to generate requests

const displaySentence =
  "Cognition refers to the mental action or process of acquiring knowledge and understanding through thought, experience, and the senses.";

const HomePage = () => {
  // using react hooks in the below statements
  const [searchWord, setSearchWord] = useState("Cognitive");
  const [partOfSpeech, setPartOfSpeech] = useState("noun");
  const [definition, setDefinition] = useState(displaySentence);
  const [userInput, setUserInput] = useState("");

  // The api used for Get and post

  const dictionaryAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`;

  const getDictonaryWords = () => {
    axios
      .get(dictionaryAPI)
      .then((res) => {
        setSearchWord(res.data[0].word);
        setPartOfSpeech(res.data[0].meanings[0].partOfSpeech);
        setDefinition(res.data[0].meanings[0].definitions[0].definition);
      })
      .catch((_error) => {
        alert("Error! Word not found.");
      });
  };

  const handleSubmit = (e: { charCode: number }) => {
    if (e.charCode === 13) {
      getDictonaryWords();
    }
  };

  const getVal = (val: { target: { value: string } }) => {
    setUserInput(val.target.value);
  };

  return (
    <div className="home-page">
      <div className="search">
        <input
          onChange={getVal}
          onKeyPress={handleSubmit}
          placeholder="Enter any word.."
        />
        <button onClick={getDictonaryWords} className="button-33">
          Search
        </button>
      </div>
      <div className="display">
        <h1>{searchWord}</h1>
        <p className="pos">{partOfSpeech}</p>
        <p className="definition">{definition}</p>
      </div>
    </div>
  );
};
export default HomePage;

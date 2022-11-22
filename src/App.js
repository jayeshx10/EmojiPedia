import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "⚽": "Football",
  "⚾": "Baseball",
  "🥎": "Tennis",
  "🏀": "Basketball",
  "🏐": "Volleyball",
  "🏈": "American Football",
  "🛹": "Skating",
  "🥊": "Boxing"
};

const emojiArray = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var input = event.target.value;
    var meaning = emojiDictionary[input];

    if (meaning === undefined) {
      meaning = "We don't have this emoji in our database";
    }
    setMeaning(meaning);
  }
  function onClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>EmojiPedia 📖 </h1>
      <input
        onChange={onChangeHandler}
        placeholder="ENTER THE EMOJI YOU WANT TO TRANSLATE"
      />

      <p>{meaning}</p>
      <br></br>

      <h3>Emojis we know ⬇️ </h3>
      {emojiArray.map((emoji) => {
        return (
          <span onClick={() => onClickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

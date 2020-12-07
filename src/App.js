import React, { useState } from "react";
import "./styles.css";

var emojiTreasure1 = {
  "😀": "Laugh",
  "😂": "Tears of Joy",
  "🙂": "Smile",
  "🙃": "Upside Down",
  "😉": "Wink",
  "😊": "Blush",
  "😇": "Blessed",
  "🥰": "Loved",
  "😍": "Fall in Love",
  "😘": "Blow Kiss",
  "😋": "Yummy",
  "😜": "Naughty",
  "🤑": "Money minded",
  "🤐": "Zipped Mouth",
  "🤥": "Pinocchio (Liar)",
  "☹️": "Sad",
  "👽": "Alien",
  "👹": "Monster",
  "👺": "Goblin",
  "💋": "Lips",
  "👻": "Ghost",
  "😐": "Neutral Face",
  "🤫": "Shushing (Be quite)",
  "❤️": "Heart",
  "💣": "Bomb",
  "👊": "Punch",
  "✌️": "Peace",
  "👂": "Ear",
  "👃": "Nose",
  "🧁": "Cupcake",
  "🍉": "Water Melon",
  "🎁": "Gift",
  "🏏": "Cricket",
  "🏳️": "Flag"
};
var emojiTreasure2 = {
  Happy: "😀😃😄😁😆😅😂",
  Sad: "😕😟😔😩😖😣😓😞",
  Angry: "😡😠😤😈👿",
  Love: "😍😘😚😙❤️💘💝💖💌💓💞💕💔",
  "Hand Sign": "✋👌✌️👈👉👆👇☝️👍👎✊👊👏🙌👐👋",
  Animals:
    "🐵🦍🐕🦊🦝🐱🐈🦁🐯🐴🦄🦓🦌🐮🐿️🐇🐁🐘🦒🐪🐐🐷🐗🐻🦔🐨🐼🦥🦨🦃🐔🐣🐧🕊️🦅🐍🐢🐳🐟🐙🐌🦋🕷️🐞🐜🦟",
  Plants: "🌸🏵️🌹🥀🌺🌻🌼🌷🌱🌲🍃🍂🍁🍀☘️🌿🌾🌵🌴🌳",
  Food: "🥨🥞🧇🧁🍩🎂🍰🍫🍬🍭🥣🍟🥪🍛🍜🍚🍔",
  Drinks: "🍼🥛☕🍵🍾🍷🍸🍹🍺🍻🥂🥃🥤🧃🧉",
  "Fruits & Vegetables":
    "🍇🍈🍉🍊🍋🍌🍍🥭🍎🍏🍐🍑🍒🍓🥝🍅🥑🍆🥔🥕🌽🌶️🥥🍄🧅🧄🥦🥬🥒🥜",
  Places: "🏡🏢🏥🏭🏛️🗽⛪🕌🕋⛩️🎪🎠🌏🗺️🏜️🏖️🏞️",
  Vehicles: "🚉🚌🚋🚑🚒🚐🛶⛵🚗🚕🚚🚜🏎️🏍️🛵🦽🦼🛺🚲🛴🪂✈️🚢🚁🚀🛸",
  Sports:
    "⚽⚾🏀🏈🎾🎳🥏🏏🏑🏓🏸🤿⛸️⛳🥊🥋♠️♥️♦️♣️♟️🃏🀄🎲🕹️🎮🎯🪁🪀🎱🏆🏅🥇🥈🎨",
  Celebrations: "🎃🎄🎆🎇🎈🎉🎊🎋🎎🎏🎐🎀🎁🎗️🧧",
  Clothes: "👔👖👕🧣🧤🧥🧦👗🥻🩱👘🩳👟🥿👡👒🎩⛑️🎓",
  Directions: "⬆️➡️⬇️⬅️↩️↪️⤴️⤵️🔃🔄"
};

var options = Object.keys(emojiTreasure1);

export default function App(temp, event) {
  var [outputData1, setOutputData1] = useState("");
  function inputHandler1(event) {
    var ipData = event.target.value;
    var opData = emojiTreasure1[ipData];
    if (opData === undefined) {
      setOutputData1("Oops!! We don't have that..Will add it soon");
    } else {
      setOutputData1(opData);
    }
  }
  var [outputData2, setOutputData2] = useState("");
  function inputHandler2(event) {
    var ipData = event.target.value;
    var opData = emojiTreasure2[ipData];
    setOutputData2(opData);
  }
  function emojiHandler(emoji) {
    var ipData = emoji;
    // if(ipData==="undefined")

    var opData = emojiTreasure1[ipData];
    setOutputData1(opData);
  }
  return (
    <div className="App">
      <div className="appTitle">
        <h1>Emoji Guru</h1>

        <header>
          <a href="#byEmoji"> By Emoji </a>
          <a href="#byCat">By Category</a>
        </header>
      </div>
      <div id="byEmoji" className="extra"></div>
      <div>
        <h3>Enter Emoji</h3>
        <input placeholder="one emoji at a time" onChange={inputHandler1} />
        <div className="result"> {outputData1} </div>
        <h3>Choose from Below</h3>
        <div className="listDisplay">
          {options.map(function (emoji) {
            return (
              <span
                className="list"
                onClick={() => emojiHandler(emoji)}
                key={emoji}
              >
                {emoji}
              </span>
            );
          })}
        </div>
      </div>
      <hr
        className="style-five"
        style={{
          height: 1
        }}
      />
      <div id="byCat">
        <h3>Enter the Category </h3>
        <select onChange={inputHandler2}>
          <option value="">-- Choose Category --</option>
          <option>Animals</option>
          <option>Angry</option>
          <option>Celebrations</option>
          <option>Clothes</option>
          <option>Directions</option>
          <option>Drinks</option>
          <option>Fruits & Vegetables</option>
          <option>Food</option>
          <option>Hand Sign</option>
          <option>Happy</option>
          <option>Love</option>
          <option>Places</option>
          <option>Plants</option>
          <option>Sad</option>
          <option>Sports</option>
          <option>Vehicles</option>
        </select>
        <div className="result">{outputData2}</div>
      </div>
    </div>
  );
}

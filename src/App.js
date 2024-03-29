/* Import the components that will be used in the app, useState and dictionary with words. */
import {React, useState} from 'react';
import dictionary from './dictionary.txt'
import Header from './components/Header.js';
import Help from './components/Help.js';
import HiddenWord from './components/HiddenWord.js';
import Hangman from './components/Hangman.js'
import WrongGuesses from './components/WrongGuesses.js';
import PopUp from './components/PopUp.js';

/* Declare the variables storing: sceret word, array of words and boolean set to true. */
let word = "";
let dictionaryArr = [];
let newGame = true;

function App() {
  
  const [gameOn, setGameOn] = useState(true);
  const [correctGuesses, setCorrectGuesses] = useState(["s"]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [dictionaryLoaded, setDictionaryLoaded] = useState(false);

  /* Create an async function to fetch the dictionary file, split it into an array, trim the whitespace 
  from each element, and filter out any elements that are only one character long. 
  Return an array of secret words from the dictionary. */
  async function getDictionary() {
    try {
      const response = await fetch(dictionary);
      const words = await response.text();
      const wordsArray = words.split('\n').slice(40);
      const trimmedArray = wordsArray.map(string => string.trim());
      dictionaryArr = trimmedArray.filter(string => string.length > 1);
      setDictionaryLoaded(true)
      return dictionaryArr;
    } catch (error) {
      console.error(error);
    }
  }

  /* Check if the dictionary has been loaded, if not load it. */
  if (!dictionaryLoaded) dictionaryArr = getDictionary();

  /* Checkif the dictionary has been loaded and if a new game has been started. If both are
  true, pick a random word from the dictionary and set newGame to false. */
  if (dictionaryLoaded && newGame) {
    if (dictionaryArr.length > 0) {
      const randomIndex = Math.floor(Math.random() * dictionaryArr.length);
      word = dictionaryArr[randomIndex].toUpperCase();
      newGame = false
    } else {
      console.error("Error 2: No words found in the file");
    }
  }

  /* Create a function to reset the game to its original state. */
  function playAgain() {
    setGameOn(true);
    setCorrectGuesses([]);
    setWrongGuesses([]);
    newGame = true
  }
  /* Check if the dictionary is loaded. If so, render all the components with corresponding props. */
  return (
    <div> {dictionaryLoaded && 
      <div className="mainContainer">
        <div className="heading">
          <Header/>
          <Help/>
        </div>
        <div>
          <Hangman wrongGuesses={wrongGuesses}/>
          <HiddenWord 
            word={word}
            correctGuesses={correctGuesses}
            wrongGuesses={wrongGuesses}
            gameOn={gameOn}
            setGameOn={setGameOn}
            setCorrectGuesses={setCorrectGuesses}
            setWrongGuesses={setWrongGuesses}/>
          <WrongGuesses wrongGuesses={wrongGuesses}/>
        </div>
        <PopUp 
          correctGuesses={correctGuesses}
          wrongGuesses={wrongGuesses}
          word={word}
          gameOn={gameOn}
          setGameOn={setGameOn}
          playAgain={playAgain}>  
        </PopUp>
      </div>}
    </div>
  );
}
// Export the App
export default App;

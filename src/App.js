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

// function getDictionary(){
//   return fetch(dictionary)
//     .then(response => response.text())
//     .then(words => {
//       const wordsArray = words.split('\n').slice(40);
//       const trimmedArray = wordsArray.map(string => string.trim());
//       dictionaryArr = trimmedArray.filter(string => string.length > 1);
//     })
//     .then(dictionary => dictionaryArr)
//     .catch(error => console.error(error));
//   }

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
    return dictionaryArr;
  } catch (error) {
    console.error(error);
  }
}

/* Return a promise that resolves when all of the promises in the iterable argument have resolved,
 or reject with the reason of the first passed promise that rejects. Return a promise that resolves 
 to an array of the dictionary */
// function getDictionaryPromise(){
//   return Promise.all([getDictionary()])
// }
dictionaryArr = await getDictionary();
      if (dictionaryArr.length > 0) {
      const randomIndex = Math.floor(Math.random() * dictionaryArr.length);
      word = dictionaryArr[randomIndex].toUpperCase()
      newGame = false
    } else {
      console.error("Error 1: No words found in the file");
    }
/*  */

// getDictionaryPromise()
//   .then(([dictionaryArr]) => {
//       if (dictionaryArr.length > 0) {
//       const randomIndex = Math.floor(Math.random() * dictionaryArr.length);
//       word = dictionaryArr[randomIndex].toUpperCase()
//       newGame = false
//     } else {
//       console.error("Error 1: No words found in the file");
//     }
//   })

function App() {

  
  const [gameOn, setGameOn] = useState(true);
  const [correctGuesses, setCorrectGuesses] = useState(["s"]);
  const [wrongGuesses, setWrongGuesses] = useState([]);

  if (newGame) {
    if (dictionaryArr.length > 0) {
      const randomIndex = Math.floor(Math.random() * dictionaryArr.length);
      word = dictionaryArr[randomIndex].toUpperCase();
      console.log(`2 word: ${word}`);
      newGame = false
    } else {
      console.error("Error 2: No words found in the file");
    }
  }
    

  function playAgain() {
    setGameOn(true);
    setCorrectGuesses([]);
    setWrongGuesses([]);
    newGame = true
    console.log(word);
  }
  
  return (
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
    </div>
  );
}

export default App;

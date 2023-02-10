/**
 * The WrongGuesses function takes in the wrongGuesses array as a prop, and returns 
 * a div with the wrong letters entered by the user, as well as a paragraph with 
 * the number of wrong guesses, so that the user can see how many wrong guesses left 
 * out of 10. The maximum number of incorrect guesses is stored in the maxWrong variable.
 */

//Store the maximum number of wrong guesses in a variable.
let maxWrong = 10;

//Pass the array with wrong guesses as a prop to the WrongGuesses function.
function WrongGuesses({wrongGuesses}) {
  return (
    /* If the length of the array is greater than 1, return the letters and the array's 
    length which is equal to the number of wrong guesses. */
    <div className="wrongGuessesContainer">
      {wrongGuesses.length > 0 && <p>Wrong Letters:</p>}
      {wrongGuesses.map((letter, i) => <span key={i}>{letter}</span>)}
      <p>Wrong Guesses: {wrongGuesses.length} / {maxWrong}</p>
    </div>
  )
}
//Export the WrongGuesses component.
export default WrongGuesses;
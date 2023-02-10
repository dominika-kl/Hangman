//Import Button from MUI library
import Button from '@mui/material/Button';

//Create variables storing the result of the game (win or lose) and assign it to an empty string.
let finalMessage = "";
//Create a variable storing the hidden word and assign it to an empty string.
let hiddenWordRevealed = "";

// Create PopUp function with props that will be needed later in the code.
const PopUp = ({word, correctGuesses, wrongGuesses, gameOn, setGameOn, playAgain}) => {
    
    /* Create a function that takes in a word, an array of correct guesses, and an array 
    of wrong guesses. Return a string that says "won" if the word has been guessed correctly, 
    "lost" if the word has not been guessed correctly and the number of wrong guesses is 10,
    and an empty string if the word has not been guessed correctly and the number of wrong guesses 
    is less than 10. */
    function winORlost(word, correct, wrong) {
        let result = "won";
        let wordArr = word.split('');
        wordArr.forEach(letter => {
            if(!correct.includes(letter)){
                result = '';
            }
        });
        if (wrong.length === 10){
            result = "lost";
        }
        return result;
    }

    /* Check if the game is won or lost. If the game is won, set the hiddenWordRevealed to an empty string,
    the finalMessage to "Congratulations! You won!", and setGameOn to false. If the game is lost, set 
    the finalMessage to "Unfortunately you lost", the hiddenWordRevealed to the word, and setGameOn to false.
    */
    if(winORlost(word, correctGuesses, wrongGuesses) === "won") {
        hiddenWordRevealed = "";
        finalMessage = "Congratulations! You won! 🏆";
        setGameOn(false);
    } else if(winORlost(word, correctGuesses, wrongGuesses) === "lost"){
        finalMessage = "Unfortunately you lost 😕";
        hiddenWordRevealed = `The word was: ${word}`
        setGameOn(false)
    }

    /* Return statement for the PopUp function. Return a div that contains a div with the final message 
    and the hidden word if the game is not on. Display a button that allows the user to play again. */
    return (
        <div>
            {!gameOn && <div className="popUpContainer">
                <h2>{finalMessage}</h2>
                <h3>{hiddenWordRevealed}</h3>
            </div>}
        <Button variant="outlined" onClick={playAgain} sx={{color: "#609EA2", ':hover': { bgcolor: '#86C8BC', color:'white'}, padding:1.2}}>PLAY AGAIN</Button>
        </div>
    )
}
//Export the PopUp component
export default PopUp;
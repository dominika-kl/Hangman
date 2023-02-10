/**
 * The function Help returns a div with a h1, two paragraphs and a button.
 * The Help button is located below website heading and is always displayed on the screen.
 * On button click the div with detailed rules of the game appears on the left-hand side of the screen.
 * The rules can both accessed and closed at any time of the game by clicking the Help button.
 */
//Import the button from MUI library and useState from react.
import Button from '@mui/material/Button';
import { useState } from 'react';

const Help = () => {
    //Add state to the Help component 
    const [toggle, setToggle] = useState(false);
    
    return (
        <div>
            {/* When the user clicks the Help button call the useState Hook to modify the state. 
            Based on the user's action, the div with the detailed rules will be displayed or not. */}
           <Button className="helButton" onClick={() => setToggle(!toggle)}variant="outlined" sx={{color: "#609EA2", ':hover': { bgcolor: '#86C8BC', color:'white'}}}>Help</Button>
           {toggle &&
            <div className="helpMessage"><h1>How to Play </h1>
                <p className="hangmanRules">Hangman is a word guessing game. Players try to figure out a hidden word by guessing letters. Each letter in a word is hidden by an underline, which is replaced by a corresponding letter when players make a correct guess. With each incorrect guess a picture of a person on the gallow appears on a screen - one part for each incorrect letter guess. The drawing is made of 10 parts, therefore if 10 letters which do not appear in the word are guessed, the player is hanged (and loses). Ready to start playing?</p> 
                <p>Good luck! </p>
            </div>
            }
        </div>        
    )
}
//Export the Help component
export default Help;
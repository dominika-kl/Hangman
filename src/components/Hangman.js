/*
The function Hangman displays a different image depending on the number of wrong guesses. 
*If the number of wrong guesses is 0, then it displays the first state of the hangman image. 
*If the number of wrong guesses is 1, then it displays the second state of the hangman image. 
*If the number of wrong guesses is 2, then displays the third state of the hangman image and so on... 
*/
//Import the images of all the states of the hangman figure.
import state1 from '../images/state1.GIF';
import state2 from '../images/state2.GIF';
import state3 from '../images/state3.GIF';
import state4 from '../images/state4.GIF';
import state5 from '../images/state5.GIF';
import state6 from '../images/state6.GIF';
import state7 from '../images/state7.GIF';
import state8 from '../images/state8.GIF';
import state9 from '../images/state9.GIF';
import state10 from '../images/state10.gif';
import state11 from '../images/state11.GIF';

//Pass the array with wrong guesses as a prop to the Hangman function.
const Hangman = ({wrongGuesses}) => {
    //Create a variable to store the length of the array containing all wrong guesses.
    const errors = wrongGuesses.length;
    return (
        //Check how many incorrect letters user has entered and display the corresponding image.
        <div className="hangmanContainer">
            {errors === 0 && <img src={state1} alt="Hangman state1"/>}
            {errors === 1 && <img src={state2} alt="Hangman state2"/>}
            {errors === 2 && <img src={state3} alt="Hangman state3"/>}
            {errors === 3 && <img src={state4} alt="Hangman state4"/>}
            {errors === 4 && <img src={state5} alt="Hangman state5"/>}
            {errors === 5 && <img src={state6} alt="Hangman state6"/>}
            {errors === 6 && <img src={state7} alt="Hangman state7"/>}
            {errors === 7 && <img src={state8} alt="Hangman state8"/>}
            {errors === 8 && <img src={state9} alt="Hangman state9"/>}
            {errors === 9 && <img src={state10} alt="Hangman state10"/>}
            {errors === 10 && <img src={state11} alt="Hangman state11"/>}
        </div>
    )
}
//Export the Hangman component.
export default Hangman;


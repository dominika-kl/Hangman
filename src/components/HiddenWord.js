//Import the button from MUI library, useState from react and Notification component.
import React, {useState} from "react";
import Notification from './Notification.js';
import Button from '@mui/material/Button';

//Create HiddenWord funtion with all the needed components as props.
const  HiddenWord = ({word, correctGuesses, setCorrectGuesses, wrongGuesses, setWrongGuesses, gameOn, setGameOn}) => {
    //Create an array with all the letters in the alphabet (including a dash) and store the array in a vairiable.
    const alphabet = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z", "-"];
    
    /* Create a function which takes another function as an argument, calls that function with 
    the argument true and then calls it again with the argument false after 3 seconds.
    This function will be called to set the state of the notification.*/
    function showNotification(setter){
        setter(true);
        setTimeout(()=> {
            setter(false);
        }, 3000);
    }
    /* Split the word that user has to guess into an array of letters, map over the array and check 
    if the letter is in the correctGuesses array. If it is, return the letter, if not, return an
    underscore. Join the array back into a string. */
    const hiddenWord = word.split('').map(letter => correctGuesses.includes(letter) ? letter : '_').join(" ");

    /* Create a state variable called notification and a function to set the state of the variable. */
    const [notification, setNotification] = useState(false);

    return (
        <div className="hiddenWordContainer">
            {/* Display the masked word */}
            <p>{hiddenWord}</p>
            {/* Creating a button for each letter in the alphabet. */}
            {alphabet.map((letterInAlphabet, index) => 
            <Button variant="contained" sx={{margin: 0.2, background: "#609EA2", ':hover': { bgcolor: '#86C8BC', color:'white'}}} key={index} onClick={() => { 
                /* Check if the game is on. If the game is on, check if chosen letter is in the word. 
                If so, check if the letter is already in the correctGuesses array. 
                If not, add it to the correctGuesses array. If the letter is in the
                correctGuesses array, show notification. 
                If the letter is not in the word, check if the wrongGuesses array is less than or equal to 9. 
                If so, check if the letter is already in the wrongGuesses array. 
                If not, add it to the wrongGuesses array. If the letter is in the wrongGuesses array, 
                show notification. If the wrongGuesses array is more than 9, set the gameOn state to false. */
                if (gameOn) {    
                    if (word.includes(letterInAlphabet)) {
                        if(!correctGuesses.includes(letterInAlphabet)){
                            setCorrectGuesses([...correctGuesses, letterInAlphabet])
                        } else {
                            showNotification(setNotification);
                        }
                    } else {
                        if (wrongGuesses.length <= 9) {
                            if(!wrongGuesses.includes(letterInAlphabet)){
                                setWrongGuesses([...wrongGuesses, letterInAlphabet])
                            } else {
                                showNotification(setNotification);
                            }
                        } else {
                            setGameOn(false);
                        }  
                    }
                }
            }}>{letterInAlphabet}</Button>)}
            {/* Pass the state of the notification to the Notification component */}
            <Notification showNotification={notification}></Notification>
        </div>)
}
//Export HiddenWord component
export default  HiddenWord
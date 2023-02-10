/**
 * The function Header returns a div with a header, a subheader, and a paragraph.
 * It displays the name of the game and its general rules. 
 */
export default function Header () {
    return (
        <div className="headerContainer">
            <h1>Hangman</h1>
            <h2>Find the Hidden Word!</h2>
            <p>Try to guess the hidden word by guessing letters. Each incorrect guess brings you closer to being "hanged".</p>
        </div>
    )
}
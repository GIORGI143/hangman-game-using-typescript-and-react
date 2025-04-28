import { useContext } from "react";
import { GuessTheWordContext } from "../context/GuessTheWordProvider";
const Letters = () => {
  const lettersForKeyboard: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const {
    guessedLetters,
    letters,
    setLetters,
    setNumberOfMistakes,
    setGuessedLetters,
  } = useContext(GuessTheWordContext);

  const handleLetterClick = (pressedLetter: string): void => {
    if (guessedLetters && guessedLetters.includes(pressedLetter)) {
      return;
    } else if (guessedLetters) {
      let letterIsGuessed = false;
      guessedLetters.push(pressedLetter);
      setGuessedLetters && setGuessedLetters([...guessedLetters]);
      letters?.forEach((element) => {
        if (element.letter === pressedLetter) {
          letterIsGuessed = true;
          element.isGuessed = true;
        }
      });
      !letterIsGuessed && setNumberOfMistakes((prev: number) => prev + 1);
      letters && setLetters([...letters]);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        maxWidth: "600px",
        gap: "10px",
      }}
    >
      {lettersForKeyboard.map((letter, index) => (
        <button
          className="letter-button"
          key={index}
          style={{
            color: guessedLetters?.includes(letter) ? "#656262" : "black",
            fontWeight: "bold",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: guessedLetters?.includes(letter)
              ? "#b3abab"
              : "white",
            borderRadius: "5px",
            cursor: guessedLetters?.includes(letter) ? "default" : "grab",
            outline: " none",
            border: "none",
          }}
          onClick={() => {
            handleLetterClick(letter);
          }}
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default Letters;

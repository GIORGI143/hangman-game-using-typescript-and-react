import { useContext, useEffect } from "react";
import { GuessTheWordContext } from "../context/GuessTheWordProvider";
import WordCorrectlyGuessed from "./WordCorrectlyGuessed";
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
    setPlayerWon,
    setWinStrike,
    playerWon,
  } = useContext(GuessTheWordContext);

  const handleLetterClick = (pressedLetter: string): void => {
    if (guessedLetters && guessedLetters.includes(pressedLetter)) {
      return;
    } else if (guessedLetters) {
      let letterIsGuessed = false;
      let everyLetterIsGuessed = true;
      guessedLetters.push(pressedLetter);
      setGuessedLetters && setGuessedLetters([...guessedLetters]);
      letters?.forEach((element) => {
        if (element.letter === pressedLetter) {
          letterIsGuessed = true;
          element.isGuessed = true;
        }
        if (!element.isGuessed) {
          everyLetterIsGuessed = false;
        }
      });

      if (everyLetterIsGuessed) {
        setPlayerWon(true);
        setWinStrike((prev: number) => prev + 1);
      }
      // if letter is not guessed, increase the number of mistakes
      !letterIsGuessed && setNumberOfMistakes((prev: number) => prev + 1);

      letters && setLetters([...letters]);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const pressedKey = event.key.toLowerCase();
      if (lettersForKeyboard.includes(pressedKey)) {
        handleLetterClick(pressedKey);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [guessedLetters, letters]);

  if (playerWon) {
    return <WordCorrectlyGuessed />;
  }
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

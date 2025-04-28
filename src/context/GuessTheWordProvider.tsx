import React, { createContext, ReactNode, useState, useEffect } from "react";
import WordList from "../wordList.json";

interface lettersArrayElementType {
  letter: string;
  isGuessed: boolean;
}

interface GuessTheWordContextType {
  randomWord: string;
  numberOfMistakes: number;
  letters: lettersArrayElementType[] | undefined;
  setNumberOfMistakes: React.Dispatch<React.SetStateAction<number>>;
  guessedLetters?: string[];
  setLetters: (letters: lettersArrayElementType[] | undefined) => void;
  setGuessedLetters?: React.Dispatch<React.SetStateAction<string[]>>;
  resetGame: () => void;
}

interface GuessTheWordProviderProps {
  children: ReactNode;
}

const GuessTheWordContext = createContext<GuessTheWordContextType>(
  {} as GuessTheWordContextType
);

const GuessTheWordProvider: React.FC<GuessTheWordProviderProps> = ({
  children,
}) => {
  let [randomWord, setRandomWord] = useState<string>("");

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const [numberOfMistakes, setNumberOfMistakes] = useState<number>(0);

  const [letters, setLetters] = useState<lettersArrayElementType[] | undefined>(
    undefined
  );

  // Generate a random word from the word list
  const generateRandomWord = (): void => {
    let word = WordList[Math.floor(Math.random() * WordList.length)];
    setRandomWord(word);
  };

  useEffect(() => {
    generateRandomWord();
  }, []);

  // Split the random word into an array of letters and set the initial state
  useEffect(() => {
    if (randomWord) {
      const lettersArray: lettersArrayElementType[] = randomWord
        .split("")
        .map((letter) => ({ letter, isGuessed: false }));
      setLetters(lettersArray);
    }
  }, [randomWord]);

  //reset game function
  const resetGame = (): void => {
    setGuessedLetters([]);
    setNumberOfMistakes(0);
    generateRandomWord();
  };

  //value for the context
  const value: GuessTheWordContextType = {
    randomWord,
    letters,
    setLetters,
    numberOfMistakes,
    setNumberOfMistakes,
    guessedLetters,
    setGuessedLetters,
    resetGame,
  };

  return (
    <GuessTheWordContext.Provider value={value}>
      {children}
    </GuessTheWordContext.Provider>
  );
};

export default GuessTheWordProvider;
export { GuessTheWordContext };

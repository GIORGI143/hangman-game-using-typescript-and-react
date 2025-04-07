import React, { createContext, ReactNode, useState } from "react";
import WordList from "../wordList.json";
// Define the type of your context value
interface GuessTheWordContextType {
  randomWord: string;
  numberOfMistakes: number;
  setNumberOfMistakes: (mistakes: number) => void;
}

const GuessTheWordContext = createContext<GuessTheWordContextType>(
  {} as GuessTheWordContextType
);

interface GuessTheWordProviderProps {
  children: ReactNode;
}

const GuessTheWordProvider: React.FC<GuessTheWordProviderProps> = ({
  children,
}) => {
  const randomWord: string =
    WordList[Math.floor(Math.random() * WordList.length)];

  const [numberOfMistakes, setNumberOfMistakes] = useState<number>(0);

  const value: GuessTheWordContextType = {
    randomWord,
    numberOfMistakes,
    setNumberOfMistakes,
  };

  return (
    <GuessTheWordContext.Provider value={value}>
      {children}
    </GuessTheWordContext.Provider>
  );
};

export default GuessTheWordProvider;
export { GuessTheWordContext };

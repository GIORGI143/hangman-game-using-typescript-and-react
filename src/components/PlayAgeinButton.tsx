import React, { useContext } from "react";
import { GuessTheWordContext } from "../context/GuessTheWordProvider";
const PlayAgeinButton = () => {
  const { resetGame } = useContext(GuessTheWordContext);

  return (
    <button className="try-agein-button" onClick={() => resetGame()}>
      Try Agein
    </button>
  );
};

export default PlayAgeinButton;

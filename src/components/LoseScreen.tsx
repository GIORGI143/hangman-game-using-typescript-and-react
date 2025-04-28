import { useContext } from "react";
import { GuessTheWordContext } from "../context/GuessTheWordProvider";
const LoseScreen = () => {
  const { numberOfMistakes, randomWord, resetGame } =
    useContext(GuessTheWordContext);

  return (
    <>
      {numberOfMistakes >= 6 && (
        <div
          style={{
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "2",
            width: "100%",
            minHeight: "100vh",
            top: "0",
            backdropFilter: "blur(10px)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              flexDirection: "column",
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <span
              style={{
                color: "red",
                fontSize: "40px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              You Lose!!!
            </span>
            <span
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                display: "block",
                color: "black",
              }}
            >
              Correct Word Was: {randomWord}
            </span>
            <button className="try-agein-button" onClick={() => resetGame()}>
              Try Agein
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoseScreen;

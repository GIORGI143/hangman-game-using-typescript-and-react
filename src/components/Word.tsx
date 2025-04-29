import { useContext } from "react";
import { GuessTheWordContext } from "../context/GuessTheWordProvider";

const Word = () => {
  const { letters, playerWon } = useContext(GuessTheWordContext);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {letters &&
        letters.map((letterObj, index) => (
          <div key={index} style={{ width: "30px", height: "50px" }}>
            <span
              style={{
                fontSize: "40px",
                position: "relative",
                display: "inline-block",
                width: "30px",
                textAlign: "center",
                height: "50px",
                color: playerWon ? "green" : "white",
              }}
            >
              {letterObj.isGuessed && letterObj.letter}
              <div
                style={{
                  position: "absolute",
                  display: "inline-block",
                  width: "100%",
                  height: "5px",
                  textAlign: "center",
                  backgroundColor: playerWon ? "green" : "white",
                  bottom: "0",
                  left: "0",
                }}
              />
            </span>
          </div>
        ))}
    </div>
  );
};

export default Word;

import { useState, useContext, useEffect } from "react";
import { GuessTheWordContext } from "../context/GuessTheWordProvider";
interface lettersArrayElementType {
  letter: string;
  isGuessed: boolean;
}
const Word = () => {
  const { randomWord } = useContext(GuessTheWordContext);
  const [letters, setLetters] = useState<lettersArrayElementType[] | undefined>(
    undefined
  );

  useEffect(() => {
    if (randomWord) {
      const lettersArray: lettersArrayElementType[] = randomWord
        .split("")
        .map((letter) => ({ letter, isGuessed: false }));
      setLetters(lettersArray);
    }
  }, [randomWord]);

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
                  backgroundColor: "white",
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

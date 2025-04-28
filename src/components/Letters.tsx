const Letters = () => {
  const letters: string[] = [
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
  const handleLetterClick = (letter: string): void => {};
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
      {letters.map((letter, index) => (
        <div
          key={index}
          style={{
            color: "black",
            fontWeight: "bold",
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "5px",
          }}
          onClick={() => {
            handleLetterClick(letter);
          }}
        >
          {letter.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export default Letters;

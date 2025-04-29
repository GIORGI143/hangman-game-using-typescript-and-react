import PlayAgeinButton from "./PlayAgeinButton";
const WordCorrectlyGuessed = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <span style={{ color: "green", fontSize: "50px", fontWeight: "bold" }}>
        You Won!!!
      </span>
      <div style={{ width: "100%", height: "5px", backgroundColor: "green" }} />
      <PlayAgeinButton />
    </div>
  );
};

export default WordCorrectlyGuessed;

import Henger from "./components/Henger";
import Word from "./components/Word";
import Letters from "./components/Letters";
import GuessTheWordProvider from "./context/GuessTheWordProvider";
import LoseScreen from "./components/LoseScreen";
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <GuessTheWordProvider>
        <LoseScreen />
        <Henger />
        <Word />
        <Letters />
      </GuessTheWordProvider>
    </div>
  );
}

export default App;

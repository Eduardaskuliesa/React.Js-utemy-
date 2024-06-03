import Player from "./components/Player.jsx";
import TimeChallenge from "./components/TimeChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimeChallenge title='Easy' targetTime={1}></TimeChallenge>
        <TimeChallenge title='Medium' targetTime={5}></TimeChallenge>
        <TimeChallenge title='Hard' targetTime={10}></TimeChallenge>
        <TimeChallenge title='Burning' targetTime={15}></TimeChallenge>
      </div>
    </>
  );
}

export default App;

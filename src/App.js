import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import GameOverview from "./components/GameOverview";


function App() {
  return (
    <div className="PlayersDiv">
      <GameOverview />
      
    </div>
  );
}

export default App;

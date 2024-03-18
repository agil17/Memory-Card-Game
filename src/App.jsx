import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import Albedo from "./images/albedo.jpg";
import Alhaitham from "./images/alhaitham.jpg";
import Aloy from "./images/aloy.jpg";
import Amber from "./images/amber.jpg";
import AratakiItto from "./images/arataki-itto.jpg";
import Ayaka from "./images/ayaka.jpg";
import Ayato from "./images/ayato.jpg";
import Baizhu from "./images/baizhu.jpg";
import Barbara from "./images/barbara.jpg";
import Beidou from "./images/beidou.jpg";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameReset, setGameReset] = useState(true);

  const characters = [
    { name: "Albedo", image: Albedo },
    { name: "Alhaitham", image: Alhaitham },
    { name: "Aloy", image: Aloy },
    { name: "Amber", image: Amber },
    { name: "Arataki-Itto", image: AratakiItto },
    { name: "Ayaka", image: Ayaka },
    { name: "Ayato", image: Ayato },
    { name: "Baizhu", image: Baizhu },
    { name: "Barbara", image: Barbara },
    { name: "Beidou", image: Beidou },
  ];

  const handleIncrementScore = () => {
    setCurrentScore(prev => prev + 1);
    setGameReset(false);
  }

  const handleGameReset = () => {
    if(currentScore > bestScore) {
      setBestScore(currentScore);
    }
    setCurrentScore(0);
    setGameReset(true);
  }

  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <CardGrid
        characters={characters}
        handleIncrementScore={handleIncrementScore}
        handleGameReset={handleGameReset}
        gameReset={gameReset}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import Card from "./Card";
import "../Styles/CardGrid.css";

function CardGrid({
  characters,
  handleIncrementScore,
  handleGameReset,
  gameReset
}) {
  const [position, setPosition] = useState(
    characters.map((item, index) => index)
  );

  const shuffleArray = (arr) => {
    const shufArr = arr.slice(0);
    let currentIndex = shufArr.length;
    while (currentIndex) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [shufArr[currentIndex], shufArr[randomIndex]] = [
        shufArr[randomIndex],
        shufArr[currentIndex],
      ];
    }
    return shufArr;
  };

  

  const randomizeCards = () => {
    setPosition(shuffleArray(position));
  }

  return (
    <div className="CardGrid">
      {position.map((itemIndex, index) => (
        <Card
          key={index}
          item={characters[itemIndex]}
          handleIncrementScore={handleIncrementScore}
          handleGameReset={handleGameReset}
          randomizeCards={randomizeCards}
          gameReset={gameReset}
        />
      ))}
    </div>
  );
}

export default CardGrid;

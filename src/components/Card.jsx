import { useState, useEffect } from "react";
import "../Styles/Card.css";

function Card({
  item,
  gameReset,
  handleIncrementScore,
  handleGameReset,
  randomizeCards,
}) {
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = () => {
    setWasClicked(!wasClicked);
    if (wasClicked) {
      handleGameReset();
    } else {
      handleIncrementScore();
    }
    randomizeCards();
  };

  useEffect(() => {
    if (gameReset) {
      setWasClicked(false);
    }
  }, [gameReset]);

  return (
    <div className="Card" onClick={handleClick}>
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
    </div>
  );
}

export default Card;

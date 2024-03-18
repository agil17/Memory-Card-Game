import "../Styles//Header.css";

function Header({ currentScore, bestScore }) {
  return (
    <div className="Header">
      <div className="left-header">
        <h1 className="title">Genshin Memory Game</h1>
        <p className="description">
          Get points by clicking on an image but don't click on any more than
          once
        </p>
      </div>
      <div className="right-header">
        <p className="current-score">Curent Score: {currentScore}</p>
        <p className="best-score">Best Score: {bestScore}</p>
      </div>
    </div>
  );
}

export default Header;

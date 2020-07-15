import React, { useEffect, useState } from "react";
import { useScore } from "../contexts/ScoreContext";
import { StyledLink } from "../styled/Navbar";
import { StyledCharacter } from "../styled/Game";

const HameOver = ({ history }) => {
  const [score] = useScore();
  const [scoreMessage, setScoreMessage] = useState("");
  if (score === -1) {
    history.push("/");
  }
  useEffect(() => {
    const saveHighScore = async () => {
      try {
        const options = {
          method: "POST",
          body: JSON.stringify({ name: "Jaaaames", score }),
        };
        const res = await fetch("/.netlify/functions/saveHighScore", options);
        const data = await res.json();
        if (data.id) {
          setScoreMessage("Congrats! You got a high score!");
        } else {
          setScoreMessage("Sorry, not a high score. Keep trying!");
        }
      } catch (err) {
        console.log(err);
      }
    };
    saveHighScore();
    return saveHighScore;
  }, []);
  return (
    <div>
      <h1>Game Over</h1>
      <StyledCharacter>{score}</StyledCharacter>
      <p>{scoreMessage}</p>
      <StyledLink to="/">Go Home</StyledLink>
      <StyledLink to="/game">Play again?</StyledLink>
    </div>
  );
};

export default HameOver;

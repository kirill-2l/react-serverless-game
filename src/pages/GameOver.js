import React from "react";
import { useScore } from "../contexts/ScoreContext";
import { StyledLink } from "../styled/Navbar";

const HameOver = ({ history }) => {
  const [score] = useScore();
  if (score === -1) {
    history.push("/");
  }
  return (
    <div>
      <h1>Game Over</h1>
      <div>{score}</div>
      <StyledLink to="/">Go Home</StyledLink>
      <StyledLink to="/game">Play again?</StyledLink>
    </div>
  );
};

export default HameOver;

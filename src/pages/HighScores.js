import React, { useState, useEffect } from "react";

import { ScoresList, ScoreLI } from "../styled/HighScores";

const HighScores = () => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const loadHighScores = async () => {
      try {
        const res = await fetch("/.netlify/functions/getHighScores");
        const scores = await res.json();
        setHighScores(scores);
      } catch (error) {
        console.log(error);
      }
    };
    loadHighScores();
  }, []);

  return (
    <div>
      <h1>High Scores</h1>

      <ScoresList>
        {highScores.map((score) => (
          <ScoreLI key={score.id}>{score.fields.name} — {score.fields.score}</ScoreLI>
        ))}
      </ScoresList>
    </div>
  );
};

export default HighScores;

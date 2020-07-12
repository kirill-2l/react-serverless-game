import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Main Page</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/highScores">High Scores</Link>
          <Link to="/">Home</Link>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

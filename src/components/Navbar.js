import React from "react";
import { Link } from "react-router-dom";
import {
  StyledNavBar,
  StyledNavBrand,
  StyledNavItems,
  StyledLink,
} from "../styled/Navbar";
import { Acent } from "../styled/Random";

export default function Navbar() {
  return (
    <StyledNavBar>
      <StyledNavBrand>
        <Link to="/">
          Main <Acent>Page</Acent>
        </Link>
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/">High Scores</StyledLink>
        </li>
        <li>
          <StyledLink to="/highScores">High Scores</StyledLink>
        </li>
        <li>
          <StyledLink to="/highScores">High Scores</StyledLink>
        </li>
      </StyledNavItems>
    </StyledNavBar>
  );
}

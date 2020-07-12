import React from "react";
import CTA from "../styled/CTA";
import { Acent, StyledTitle } from "../styled/Random";

const Home = () => {
  return (
    <div>
      <StyledTitle>Ready to type?</StyledTitle>
      <CTA to="/game">
        Click or type <Acent>'s'</Acent> to start playing!
      </CTA>
    </div>
  );
};

export default Home;

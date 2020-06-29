import React from "react";
import styled from "styled-components";
import posed from "react-pose";
import { breakpoints } from "../../helpers/contants";

const CardPosed = posed.div({
  enter: {
    top: 0,
    opacity: 1,
    transition: {
      duration: 150
    }
  },
  exit: {
    top: 20,
    opacity: 0,
    transition: {
      duration: 150
    }
  }
});

const CardWrapper = styled(CardPosed)`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .card {
    background: var(--white);
    padding: 50px;
    border: 4px solid var(--brown);
    border-radius: 12px;
    width: 100%;
    max-width: 613px;
    min-height: 376px;
    overflow: auto;
    position: relative;
  }
  @media ${breakpoints.mobile} {
    justify-content: flex-start;
    padding-top: 30px;
  }
`;

function Card({ children, ...props }) {
  return (
    <CardWrapper {...props}>
      <div className={`card`}>{children}</div>
    </CardWrapper>
  );
}

export default Card;

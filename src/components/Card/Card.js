import React from "react";
import styled from "styled-components";
import posed from "react-pose";

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
  justify-content: center;
  align-items: center;
  .card {
    background: var(--white);
    padding: 50px;
    border: 4px solid var(--brown);
    border-radius: 12px;
    width: 100%;
    max-width: 613px;
    height: 376px;
    overflow: scroll;
    position: relative;
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

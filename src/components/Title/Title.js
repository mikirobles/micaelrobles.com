import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  .line {
    flex: 1;
    height: 4px;
    background: var(--cream);
    margin: 0 0 4px 0;
    &:first-child {
      margin-right: 10px;
    }
    &:last-child {
      margin-left: 10px;
    }
  }
  h1 {
    font-size: 1.666rem;
    color: #58410a;
    text-align: left;
  }
`;

function Card({ children, ...props }) {
  return (
    <TitleWrapper {...props}>
      <span className="line" />
      <h1>{children}</h1>
      <span className="line" />
    </TitleWrapper>
  );
}

export default Card;

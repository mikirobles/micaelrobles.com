import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const CloseButtonWrapper = styled(Link)`
  button {
    position: absolute;
    top: 7px;
    left: 14px;
    font-weight: bold;
    font-size: 1.25rem;
    font-family: var(--main-font);
    background: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    &:focus {
      outline: 0;
    }
  }
  a {
    color: var(--brown);
  }
`;

function CloseButton({ href }) {
  return (
    <CloseButtonWrapper to={href}>
      <button className="close-btn">x</button>
    </CloseButtonWrapper>
  );
}

export default CloseButton;

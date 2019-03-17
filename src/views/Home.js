import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
import Card from "../components/Card";
import { images, breakpoints, links } from "../helpers/contants";

const HomeCard = styled(Card)`
  h1,
  h2 {
    font-weight: normal;
  }
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  h2 {
    font-style: italic;
    font-size: 1.333rem;
    margin-top: 5px;
  }
  .card {
    position: relative;
    padding-left: 120px;
  }
  .band {
    width: 10px;
    height: 100%;
    background: var(--egg);
    position: absolute;
    top: 0;
    left: 60px;
  }
  .name-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .name-col {
      flex: 1;
    }
  }

  .social-links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    a:not(:last-child) {
      margin-right: 13px;
    }
    img:hover {
      filter: brightness(0.8);
    }
    img:active {
      filter: brightness(0.65);
    }
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 24px 0 0;
    li {
      font-size: 1.333rem;
      line-height: 40px;
      a {
        color: inherit;
        text-decoration: none;
      }
      span {
        cursor: pointer;
        position: relative;

        &:hover:before {
          content: "";
          position: absolute;
          bottom: 50%;
          left: -20px;
          width: 8px;
          height: 8px;
          transform: rotate(45deg);
          background: var(--brown);
        }
      }
    }
  }
  @media ${breakpoints.mobile} {
    .name-row {
      flex-direction: column;
      .name-col {
        margin-bottom: 15px;
      }
    }
  }
`;

function Home() {
  return (
    <HomeCard>
      <div className="band" />
      <div className="name-row">
        <div className="name-col">
          <h1>Micael Robles</h1>
          <h2>web developer</h2>
        </div>
        <div className="social-links">
          <a target="_blank" rel="noreferrer noopener" href={links.twitter}>
            <img src={images.twitter} alt="Twitter" />
          </a>
          <a target="_blank" rel="noreferrer noopener" href={links.linkedin}>
            <img src={images.linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <ul>
        <li>
          <span>
            <Link to="/about">About</Link>{" "}
          </span>
        </li>
        <li>
          <span>Projects</span>
        </li>
        <li>
          <span>Blog</span>
        </li>
        <li>
          <span>Contact</span>
        </li>
      </ul>
    </HomeCard>
  );
}

export default Home;

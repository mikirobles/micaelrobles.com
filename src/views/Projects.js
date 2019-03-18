import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Title from "../components/Title";
import { breakpoints, images, projects, links } from "../helpers/contants";
import CloseButton from "../components/CloseButton";

const ProjectsCard = styled(Card)`
  padding-bottom: 20px;
  .card {
    padding: 25px 30px;
  }
  .subtitle {
    text-align: center;
    letter-spacing: 2px;
    margin-top: 5px;
    text-transform: uppercase;
  }
  ul li:not(:last-child) {
    border-bottom: 2px solid var(--cream);
  }

  .github {
    width: 100%;
    text-align: center;
    display: block;
    color: inherit;
  }

  .project {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 15px 0;

    > span:first-child {
      margin-right: 20px;
      font-weight: bold;
      min-width: 145px;
      text-align: right;
      font-size: 1rem;
      text-decoration: underline;
    }
    .visit {
      text-decoration: none;
      background: var(--egg);
      color: var(--brown);
      padding: 8px 12px;
      font-weight: bold;
    }
    .col {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .code {
      margin-top: 5px;
      font-size: 0.75rem;
      text-decoration: none;
      width: 81px;
      text-align: center;
      color: inherit;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media ${breakpoints.mobile} {
    align-items: flex-start;
    overflow: scroll;
    .subtitle {
      font-size: 0.75rem;
    }
    .project {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        margin: 15px 0;
        text-align: justify;
      }
      & > span:first-child {
        min-width: unset;
        text-align: center;
        margin: 0;
      }
    }
  }
`;

const Project = ({ name, description, link, code }) => (
  <li key={name}>
    <div className="project">
      <span>{name}</span>
      <p>{description}</p>
      <div className="col">
        {link && (
          <a
            className="visit"
            target="_blank"
            rel="noreferrer noopener"
            href={link}
          >
            Visit
          </a>
        )}
        {code && (
          <a
            className="code"
            target="_blank"
            rel="noreferrer noopener"
            href={code}
          >
            <span>see code</span>
          </a>
        )}
      </div>
    </div>
  </li>
);

function Projects() {
  return (
    <ProjectsCard>
      <Title>Projects</Title>
      <CloseButton href="/" />
      <p className="subtitle">Cool things I once did:</p>
      <ul>{projects.map(Project)}</ul>
      <a
        href={links.github}
        rel="noopener noreferrer"
        target="_blank"
        className="github"
      >
        - Find more on Github -
      </a>
    </ProjectsCard>
  );
}

export default Projects;

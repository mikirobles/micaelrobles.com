import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Title from "../components/Title";
import { breakpoints, images, projects } from "../helpers/contants";
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

  .project {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 15px 0;
    border-bottom: 2px solid var(--cream);
    > span:first-child {
      margin-right: 10px;
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
  }
`;

const Project = ({ name, description, link, code }) => (
  <li>
    <div className="project">
      <span>{name}</span>
      <p>{description}</p>
      <div className="col">
        {link && (
          <a className="visit" href={link}>
            Visit
          </a>
        )}

        {code && (
          <a className="code" href={code}>
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
    </ProjectsCard>
  );
}

export default Projects;

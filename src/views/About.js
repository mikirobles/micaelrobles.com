import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Title from "../components/Title";
import { breakpoints, images } from "../helpers/contants";
import CloseButton from "../components/CloseButton";

const AboutCard = styled(Card)`
  padding-bottom: 20px;
  .card {
    padding: 25px 30px;
  }
  .about-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 16px;

    p {
      font-size: 1rem;
      line-height: 30px;
      margin-right: 10px;
      flex: 1;
    }

    img {
      width: 187px;
      height: 206px;
    }
  }

  @media ${breakpoints.mobile} {
    align-items: flex-start;
    overflow: scroll;
    .about-row {
      flex-direction: column-reverse;
      align-items: center;
      p {
        text-align: center;
        margin-top: 20px;
      }
    }
  }
`;

function About() {
  return (
    <AboutCard>
      <Title>About</Title>
      <div className="about-row">
        <CloseButton href="/" />
        <p>
          Hello! <br />
          My name is <strong>Micael</strong>, and I am a{" "}
          <strong>Front-end developer</strong> from Buenos Aires, Argentina. I
          love learning and working with new technologies and I aspire to be the
          best developer I can become.
        </p>
        <img
          src={images.mypicture}
          srcSet={`${images.mypicture} 1x, ${images.mypicture2x} 2x`}
          alt="Me smiling"
        />
      </div>
    </AboutCard>
  );
}

export default About;

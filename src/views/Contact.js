import React, { useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Title from "../components/Title";
import posed, { PoseGroup } from "react-pose";
import { breakpoints } from "../helpers/contants";
import CloseButton from "../components/CloseButton";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const ContactCard = styled(Card)`
  padding-bottom: 20px;
  .card {
    padding: 25px 30px;
    display: flex;
    flex-direction: column;
  }
  .contact-row {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
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

  .initial-btn {
    flex: 1;
    background: transparent;
    border: 0;
    outline: 0;
    font-family: var(--main-font);
    font-weight: bold;
    font-size: 1.5rem;
    padding: 20px;
    text-align: center;
    color: inherit;
    text-decoration: none;

    height: 100%;
    margin: 20px;
    border: 2px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
      border: 2px dashed var(--honey);
    }
  }

  span.separator {
    display: block;
    width: 4px;
    height: 100%;
    background: var(--egg);
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    input,
    textarea {
      font-size: 1rem;
      font-family: var(--main-font);
      border: 0;
      outline: 0;
      margin-bottom: 20px;
      color: var(--brown);
      border-bottom: 2px dashed var(--brown);
      padding: 5px 0;
      position: relative;
      &::placeholder {
        color: var(--brown);
        /* font-weight: bold; */
        /* text-transform: uppercase; */
      }
      &.error {
        border-color: var(--red);
        &::placeholder {
          color: var(--red);
        }
        &::after {
          content: "";
          background: red;
          color: white;
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 30px;
          display: block;
        }
      }
    }
    textarea {
      height: 80px;
      width: 100%;
      resize: none;
    }
    button {
      width: 150px;
      border: 0;
      background: var(--brown);
      color: white;
      font-size: 1rem;
      font-family: var(--main-font);
      margin: 0 auto;
      padding: 15px;
      cursor: pointer;
      font-weight: bold;
    }
  }

  .end-text {
    text-align: center;
    font-weight: normal;
    width: 100%;
    a {
      color: var(--red);
    }
  }

  @media ${breakpoints.mobile} {
    padding-bottom: 0;
    padding-top: 50px;
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

const StepPose = posed.div({
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
});

const Step = styled(StepPose)`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const screens = {
  initial: "initial",
  contactForm: "contactForm",
  formSucceed: "formSucceed",
  formError: "formError"
};

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Contact() {
  const [screen, setScreen] = useState(screens.initial);

  const openContactForm = () => setScreen(screens.contactForm);

  return (
    <ContactCard>
      <Title>Contact</Title>
      <div className="contact-row">
        <CloseButton href="/" />
        <PoseGroup>
          {screen === screens.initial && (
            <Step key={screens.initial}>
              <a href="mailto:micael.robles@gmail.com" className="initial-btn">
                Send me an email
              </a>
              <span className="separator" />
              <button className="initial-btn" onClick={openContactForm}>
                Just show me the contact form
              </button>
            </Step>
          )}
          {screen === screens.contactForm && (
            <Step key={screens.contactForm}>
              <Formik
                initialValues={{ name: "", email: "", message: "" }}
                validationSchema={yup.object().shape({
                  name: yup
                    .string()
                    .min(2, "Name is too short")
                    .max(40, "Name is too long")
                    .required("Name is required"),
                  email: yup
                    .string()
                    .email("Invalid email")
                    .required("Email is required"),
                  message: yup
                    .string()
                    .min(3, "Message is too short")
                    .required()
                })}
                validateOnChange={false}
                validateOnBlur={false}
                onSubmit={(values, { setSubmitting }) => {
                  const { email, message, name } = values;
                  setSubmitting(true);
                  fetch("/", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: encode({
                      "form-name": "contact",
                      name,
                      message,
                      email
                    })
                  })
                    .then(() => {
                      setSubmitting(false);
                      setScreen(screens.formSucceed);
                    })
                    .catch(error => {
                      console.log(error);
                      setScreen(screens.formError);
                    });
                }}
              >
                {({ errors }) => (
                  <Form className="contact-form">
                    <Field
                      className={errors.name ? "error" : ""}
                      type="text"
                      name="name"
                      placeholder="Your name"
                    />
                    <Field
                      className={errors.email ? "error" : ""}
                      type="email"
                      name="email"
                      placeholder="Your email"
                    />
                    <Field
                      className={errors.message ? "error" : ""}
                      component="textarea"
                      name="message"
                      placeholder="Your message"
                    />
                    <button type="submit">Send</button>
                  </Form>
                )}
              </Formik>
            </Step>
          )}
          {screen === screens.formSucceed && (
            <Step key={screens.formSucceed}>
              <h2 className="end-text">Got it! I will get back to you ASAP</h2>
            </Step>
          )}
          {screen === screens.formError && (
            <Step key={screens.formError}>
              <h2 className="end-text">
                :( <br />
                Oops! Something went wrong... maybe try later or send me an
                email <a href="mailto:micael.robles@gmail.com">here.</a>
              </h2>
            </Step>
          )}
        </PoseGroup>
      </div>
    </ContactCard>
  );
}

export default Contact;

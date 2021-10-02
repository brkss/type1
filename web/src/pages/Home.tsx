import React from "react";
import {
  Intro,
  Why,
  AppView,
  About,
  Special,
  ContactUs,
} from "../components/Home";
import { ABOUT_SECTIONS } from "../utils/data/about.data";
import { Navigation } from "../components";
import styled from "@emotion/styled";
import { useHistory } from "react-router";

export const Home: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <Navigation />
      <Intro />
      <Why />
      <AppView />
      {ABOUT_SECTIONS.map((section) => (
        <About
          image={section.image}
          title={section.title}
          text={section.text}
        />
      ))}
      <Special />
      <ContactUs />
      <Button onClick={() => history.push("survey")}> Join OPEN CC !</Button>
    </>
  );
};

const Button = styled.button`
  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  background: blue;
  //background: inherit;
  padding: 6px 24px;
  border-radius: 50px;
  font-weight: bold;
  color: white;
  background-color: rgb(0 8 251 / 68%);
  backdrop-filter: blur(5px);
`;

import React from "react";
import { Intro, Why, AppView, About } from "../components/Home";
import { ABOUT_SECTIONS } from "../utils/data/about.data";

export const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <Why />
      <AppView />
      {ABOUT_SECTIONS.map((section) => (
        <About title={section.title} text={section.text} />
      ))}
    </>
  );
};

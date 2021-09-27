import React from "react";
import { Intro, Why, AppView, About } from "../components/Home";

export const Home: React.FC = () => {
  return (
    <>
      <Intro />
      <Why />
      <AppView />
      <About />
    </>
  );
};

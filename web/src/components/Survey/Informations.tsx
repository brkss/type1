import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { InputText, ButtonNav } from "../General";

export const Information: React.FC = () => {
  return (
    <Box w={{ md: "40%", base: "80%" }}>
      <Heading>Informations</Heading>
      <InputText
        label={"Full Name"}
        placeholder={"Full Name"}
        changed={() => {}}
      />
      <InputText
        label={"Email  required so we can send you the invatation !"}
        placeholder={"Email"}
        changed={() => {}}
      />
      <ButtonNav text={"Next"} clicked={() => {}} />
    </Box>
  );
};

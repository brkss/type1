import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const Information: React.FC = () => {
  return (
    <Box w={{ md: "50%", base: "80%" }}>
      <Heading>Informations</Heading>
      <Box>
        <Input type={"text"} placeholder={"Name"} />
        <Label>Full Name</Label>
      </Box>
    </Box>
  );
};

const Label = styled.label`
  font-size: 12px;
  opacity: 0.8;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 0 0;
  /* background: #e8e8e8; */
  border-radius: 5px;
  font-size: 23px;
  font-weight: bold;
  opacity: 0.9;
  &:focus {
    outline: none;
  }
`;

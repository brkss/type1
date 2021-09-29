import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface Props {
  label: string;
  placeholder?: string;
  changed: (value: string) => void;
}

export const InputText: React.FC<Props> = ({ label, placeholder, changed }) => {
  return (
    <Box>
      <Input
        type={"text"}
        placeholder={placeholder || ""}
        onChange={(e) => changed(e.currentTarget.value)}
      />
      <Label>{label}</Label>
    </Box>
  );
};

const Label = styled.label`
  font-size: 12px;
  opacity: 0.8;
  margin-top: -2px;
  display: block;
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

import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Animated } from "react-animated-css";

interface Props {
  label: string;
  placeholder?: string;
  changed: (value: string) => void;
  delay?: number;
  visible: boolean;
}

export const InputText: React.FC<Props> = ({
  label,
  placeholder,
  changed,
  delay,
  visible,
}) => {
  return (
    <Animated
      animationIn="fadeInUp"
      animationOut="fadeOutUp"
      animationInDuration={1000}
      animationOutDuration={1000}
      isVisible={visible}
      animationInDelay={delay || 0}
    >
      <Box>
        <Input
          type={"text"}
          placeholder={placeholder || ""}
          onChange={(e) => changed(e.currentTarget.value)}
        />
        <Label>{label}</Label>
      </Box>
    </Animated>
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

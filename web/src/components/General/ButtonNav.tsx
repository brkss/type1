import React from "react";
import styled from "@emotion/styled";
import { Animated } from "react-animated-css";

interface Props {
  text: string;
  clicked: () => void;
  delay?: number;
  visible: boolean;
}

export const ButtonNav: React.FC<Props> = ({
  text,
  clicked,
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
      <Button onClick={() => clicked()}>{text}</Button>{" "}
    </Animated>
  );
};

const Button = styled.button`
  margin-top: 20px;
  background: blue;
  font-weight: bold;
  color: white;
  padding: 5px 30px;
  border-radius: 50px;
`;

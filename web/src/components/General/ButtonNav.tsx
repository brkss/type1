import React from "react";
import styled from "@emotion/styled";

interface Props {
  text: string;
  clicked: () => void;
}

export const ButtonNav: React.FC<Props> = ({ text, clicked }) => {
  return <Button onClick={() => clicked()}>{text}</Button>;
};

const Button = styled.button`
  margin-top: 20px;
  background: blue;
  font-weight: bold;
  color: white;
  padding: 5px 30px;
  border-radius: 50px;
`;

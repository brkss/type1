import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { InputText, ButtonNav } from "../General";
import { Animated } from "react-animated-css";

interface Props {
  onFinish: () => void;
}

export const Information: React.FC<Props> = ({ onFinish }) => {
  const [visible, SetVisible] = React.useState(true);
  const next = () => {
    SetVisible(false);
    setTimeout(() => onFinish(), 1000);
  };

  return (
    <Box w={{ md: "40%", base: "80%" }}>
      <Animated
        animationIn="fadeInUp"
        animationOut="fadeOutUp"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={visible}
      >
        <Heading>Basic Informations</Heading>
      </Animated>
      <InputText
        label={"Full Name"}
        placeholder={"Full Name"}
        changed={() => {}}
        visible={visible}
      />
      <InputText
        label={"Email  required so we can send you the invatation !"}
        placeholder={"Email"}
        changed={() => {}}
        visible={visible}
      />
      <ButtonNav text={"Next"} visible={visible} clicked={() => next()} />
    </Box>
  );
};

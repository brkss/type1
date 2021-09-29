import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Animated } from "react-animated-css";

interface Props {}

export const Question: React.FC = () => {
  return (
    <Box>
      <Animated
        animationIn="fadeInUp"
        animationOut="fadeOutUp"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={true}
        animationInDelay={0}
      >
        <Heading fontSize={"20px"}>
          Do you have any of the following conditions ?
        </Heading>
      </Animated>
    </Box>
  );
};

import React from "react";
import { Animated } from "react-animated-css";
import { Box, Text } from "@chakra-ui/react";

interface Props {
  delay?: number;
  visible: boolean;
  selected?: boolean;
  answer: string;
  description?: string;
}

export const Answer: React.FC<Props> = ({
  delay,
  visible,
  answer,
  selected,
  description,
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
      <Box
        p={"10px"}
        mt={"15px"}
        border={"1px solid #0000001a"}
        rounded={5}
        fontSize={"13px"}
        fontWeight="bold"
      >
        <Text>{answer}</Text>
        {description ? (
          <Text fontWeight={"400"} opacity={0.8}>
            {description}
          </Text>
        ) : null}
      </Box>
    </Animated>
  );
};

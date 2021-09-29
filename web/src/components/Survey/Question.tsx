import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Animated } from "react-animated-css";
import { Answer, ButtonNav } from "../General";
import { IQuestion } from "../../utils/types/Question";

interface Props {
  question: IQuestion;
  next: () => void;
}

export const Question: React.FC<Props> = ({ question, next }) => {
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
        <Heading fontSize={"20px"}>{question.text}</Heading>
        <Box>
          {question.answers.map((answer, key) => (
            <Answer
              key={key}
              answer={answer.text}
              description={answer.description}
              visible={true}
              delay={key * 2}
            />
          ))}
        </Box>
        <ButtonNav visible={true} text={"Next"} clicked={() => next()} />
      </Animated>
    </Box>
  );
};

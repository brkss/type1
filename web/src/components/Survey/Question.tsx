import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Animated } from "react-animated-css";
import { Answer, ButtonNav } from "../General";
import { IQuestion, IAnswer } from "../../utils/types/Question";

interface Props {
  question: IQuestion;
  next: (answers: IAnswer[]) => void;
}

export const Question: React.FC<Props> = ({ question, next }) => {
  const [answers, SetAnswers] = React.useState<IAnswer[]>([]);

  const handleSelectAnswer = (answer: IAnswer) => {
    const index = answers.findIndex((x) => x.text == answer.text);
    if (index == -1) {
      SetAnswers([...answers, answer]);
    } else {
      answers.splice(index, 1);
      SetAnswers([...answers]);
    }
  };

  const checkIfAnswerSelected = (answer: IAnswer): boolean => {
    return answers.findIndex((x) => x.text == answer.text) == -1 ? false : true;
  };

  return (
    <Box p={5}>
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
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
              selected={checkIfAnswerSelected(answer)}
              choose={() => handleSelectAnswer(answer)}
            />
          ))}
        </Box>
        <ButtonNav visible={true} text={"Next"} clicked={() => next(answers)} />
      </Animated>
    </Box>
  );
};

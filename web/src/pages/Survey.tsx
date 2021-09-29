import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import { SurveyIntro, Information, Question } from "../components/Survey";
import { questions } from "../utils/data/questions.data";

export const Survey: React.FC = () => {
  const [current, SetCurrent] = React.useState<number>(1);
  const [currentQuestion, SetCurrentQuestion] = React.useState<number>(0);

  const nextQuestion = () => {
    if (currentQuestion < questions.length) {
      SetCurrentQuestion(currentQuestion + 1);
    }
  };

  const finished = () => {
    SetCurrent(current + 1);
  };

  return (
    <Box overflow={"hidden"} minH={"100vh"}>
      <Center minH={"100vh"} overflow={"hidden"}>
        {
          {
            1: <SurveyIntro onFinish={() => finished()} />,
            2: <Information onFinish={() => finished()} />,
            3: (
              <Question
                question={questions[currentQuestion]}
                next={() => nextQuestion()}
              />
            ),
          }[current]
        }
      </Center>
    </Box>
  );
};

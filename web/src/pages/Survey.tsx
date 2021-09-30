import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import {
  SurveyIntro,
  Information,
  Question,
  ThankYou,
} from "../components/Survey";
import { questions } from "../utils/data/questions.data";
import { IQuestion, IAnswer } from "../utils/types/Question";

export const Survey: React.FC = () => {
  const [current, SetCurrent] = React.useState<number>(1);
  const [currentQuestion, SetCurrentQuestion] = React.useState<number>(0);
  const [qaa, SetQaa] = React.useState<IQuestion[]>([]);

  const nextQuestion = (answers: IAnswer[]) => {
    if (currentQuestion < questions.length - 1) {
      SetQaa([
        ...qaa,
        { text: questions[currentQuestion].text, answers: answers },
      ]);
      SetCurrentQuestion(currentQuestion + 1);
    } else {
      SetQaa([
        ...qaa,
        { text: questions[currentQuestion].text, answers: answers },
      ]);
      finished();
      console.log("answers : ", qaa);
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
                next={(answers: IAnswer[]) => nextQuestion(answers)}
              />
            ),
            4: <ThankYou />,
          }[current]
        }
      </Center>
    </Box>
  );
};

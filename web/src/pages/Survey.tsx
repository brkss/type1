import React from "react";
import { Box, Center, useToast } from "@chakra-ui/react";
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
  const [baseInfo, SetBaseInfo] = React.useState<{
    name: string;
    email: string;
  }>({ name: "", email: "" });
  const toast = useToast();

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
      if (!baseInfo.name || !baseInfo.email) {
        toast({
          title: "Missing Information :(",
          status: "warning",
          isClosable: true,
          duration: 3000,
        });
      }

      saveSurveyData();
    }
  };

  const saveSurveyData = () => {
    const _data = {
      name: baseInfo.name,
      email: baseInfo.email,
      questions: [...qaa],
    };
    finished();
    console.log("final data : ", _data);
    console.log("final qaa : ", qaa);
  };

  const saveBaseInformation = (name: string, email: string) => {
    SetBaseInfo({
      name: name,
      email: email,
    });
    finished();
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
            2: (
              <Information
                onFinish={(name: string, email: string) =>
                  saveBaseInformation(name, email)
                }
              />
            ),
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

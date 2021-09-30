import React from "react";
import { Box, Center, useToast } from "@chakra-ui/react";
import {
  SurveyIntro,
  Information,
  Question,
  ThankYou,
  Finish,
} from "../components/Survey";
import { questions } from "../utils/data/questions.data";
import { IQuestion, IAnswer } from "../utils/types/Question";
import { useCreateRequestRecordMutation } from "../generated/graphql";

export const Survey: React.FC = () => {
  const [current, SetCurrent] = React.useState<number>(1);
  const [currentQuestion, SetCurrentQuestion] = React.useState<number>(0);
  const [qaa, SetQaa] = React.useState<IQuestion[]>([]);
  const [baseInfo, SetBaseInfo] = React.useState<{
    name: string;
    email: string;
  }>({ name: "", email: "" });
  const toast = useToast();
  const [request] = useCreateRequestRecordMutation();
  const nextQuestion = (answers: IAnswer[]) => {
    SetQaa((prevQaa) => [
      ...prevQaa,
      { text: questions[currentQuestion].text, answers: answers },
    ]);
    if (currentQuestion < questions.length - 1) {
      SetCurrentQuestion(currentQuestion + 1);
    } else {
      if (!baseInfo.name || !baseInfo.email) {
        toast({
          title: "Missing Information :(",
          status: "warning",
          isClosable: true,
          duration: 3000,
        });
      }
      console.log("qaa => ", qaa);
      finished();
      //saveSurveyData();
    }
  };

  const saveSurveyData = () => {
    console.log("qaa => ", qaa);
    const _data = {
      name: baseInfo.name,
      email: baseInfo.email,
      questions: qaa.map((q) => ({
        text: q.text,
        answers: q.answers.map((a) => ({
          text: a.text,
        })),
      })),
    };
    request({ variables: _data }).then((res) => {
      if (res.errors || !res.data) {
        toast({
          title: "Something went wrong",
          duration: 3000,
          isClosable: true,
          status: "warning",
        });
        return;
      }
      if (res.data.createRequest.status) {
        finished();
      } else {
        toast({
          title: res.data.createRequest.message! + "Exp",
          status: "warning",
          isClosable: true,
          duration: 3000,
        });
      }
    });
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
            4: <Finish finished={() => saveSurveyData()} />,
            5: <ThankYou />,
          }[current]
        }
      </Center>
    </Box>
  );
};

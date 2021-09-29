import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import { SurveyIntro } from "../components/Survey";

export const Survey: React.FC = () => {
  const [current, SetCurrent] = React.useState<number>(1);
  const finished = () => {
    SetCurrent(current + 1);
  };

  return (
    <Box overflow={"hidden"} minH={"100vh"}>
      <Center minH={"100vh"} overflow={"hidden"}>
        {
          {
            1: <SurveyIntro onFinish={() => finished()} />,
            2: <Heading>Hello !</Heading>,
          }[current]
        }
      </Center>
    </Box>
  );
};

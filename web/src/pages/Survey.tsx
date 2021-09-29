import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import { SurveyIntro } from "../components/Survey";

export const Survey: React.FC = () => {
  return (
    <Box overflow={"hidden"} minH={"100vh"}>
      <Center minH={"100vh"} overflow={"hidden"}>
        <SurveyIntro />
      </Center>
    </Box>
  );
};

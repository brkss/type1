import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";

export const Intro: React.FC = () => {
  return (
    <Center minH={"50vh"} background={"#fff"}>
      <Heading textAlign={"center"} fontSize={"43px"} fontWeight={"bold"}>
        Open Source Software <br /> to help you manage <br /> autoimmune chronic
        diseases
      </Heading>
    </Center>
  );
};

import React from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { ButtonNav } from "../General";

interface Props {
  finished: () => void;
}

export const Finish: React.FC<Props> = ({ finished }) => {
  return (
    <Box minH={"50vh"}>
      <Center minH={"50vh"}>
        <Box h={"100%"} textAlign={"center"}>
          <Heading mb={3}>Join Open CC</Heading>
          <ButtonNav
            clicked={() => finished()}
            text={"Join ❤️"}
            visible={true}
          />
        </Box>
      </Center>
    </Box>
  );
};

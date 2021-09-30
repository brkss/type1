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
          <Text mb={3}>
            Your informations won't be shared with any third party!
          </Text>
          <ButtonNav
            clicked={() => finished()}
            text={"Finish !"}
            visible={true}
          />
        </Box>
      </Center>
    </Box>
  );
};

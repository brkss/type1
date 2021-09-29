import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import special from "../../assets/special.png";

export const Special: React.FC = () => {
  return (
    <Box minH={"100vh"} background={"black"} color={"white"} p={15}>
      <Box w={{ md: "70%", base: "100%" }} m={"auto"} mt={20}>
        <Heading>Notifications And Alerts</Heading>
        <Text>
          Better records help you visualize how your insulin doses, medications,
          food intake, carb counts, activity and all the important factors
          affect your chronic condition . They help pinpoint other things that
          affect your condition like menses, stress, or an infection.
        </Text>
        <br />
        <Image src={special} w={"100%"} m={"auto"} />
      </Box>
    </Box>
  );
};

import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import special from "../../assets/special_final.png";

export const Special: React.FC = () => {
  return (
    <Box background={"black"} color={"white"} p={15} pb={0}>
      <Box w={{ md: "70%", base: "100%" }} m={"auto"} mt={20}>
        <Heading fontSize={{ md: "30px", base: "22px" }}>
          Notifications And Alerts
        </Heading>
        <Text>
          Demons help you monitor your health by pushing notifications and
          alerts to remind you to take your medicine, sleep, check your blood
          sugar for people with uncontinuous glucose monitors, warn you about
          unexpected changes like low blood glucose, telling how your numbers
          are doing, or even suggest healthy recipes.
        </Text>
        <br />
        <Image src={special} w={"100%"} m={"auto"} />
      </Box>
    </Box>
  );
};

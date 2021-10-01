import React from "react";
import { Box, Center, Heading, Text, Link } from "@chakra-ui/react";

export const ThankYou: React.FC = () => {
  return (
    <Box minH={"50vh"} p={3}>
      <Center minH={"50vh"}>
        <Box h={"100%"} textAlign={"center"}>
          <Heading mb={3}>Thank You !</Heading>
          <Text mb={3}>
            You're in the list, you'll recieve an email with your account
            credentials as soon as you're in.
          </Text>
          <Link
            href={"#"}
            fontSize={"18px"}
            color={"#0066cc"}
            fontWeight={"bold"}
          >
            OpenCC on Twitter
          </Link>
        </Box>
      </Center>
    </Box>
  );
};

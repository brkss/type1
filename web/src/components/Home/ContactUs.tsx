import React from "react";
import { Box, Center, Heading, Text, Link } from "@chakra-ui/react";

export const ContactUs: React.FC = () => {
  return (
    <Box background={"#efefef"} minH={"50vh"}>
      <Center minH={"50vh"}>
        <Box h={"100%"} textAlign={"center"}>
          <Heading mb={3}>You need help with something.</Heading>
          <Text mb={3}>
            Report Bugs, Features Requests or Ask About Something.
          </Text>
          <Link
            href={"#"}
            fontSize={"18px"}
            color={"#0066cc"}
            fontWeight={"bold"}
          >
            Send Message
          </Link>
        </Box>
      </Center>
    </Box>
  );
};

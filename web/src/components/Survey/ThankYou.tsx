import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const ThankYou: React.FC = () => {
  return (
    <Box>
      <Heading>Thank you!</Heading>
      <Text>
        You are on the list! You'll recieve an invitation link with your account
        credentials when you're selected!
      </Text>
    </Box>
  );
};

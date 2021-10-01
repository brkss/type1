import React from "react";
import { Box, Heading, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import thumb from "../../assets/why.jpeg";

export const Why: React.FC = () => {
  return (
    <Box
      p={"20px 3px"}
      textAlign={"center"}
      w={{ lg: "60%", md: "80%", base: "100%" }}
      m={"auto"}
    >
      <Heading fontSize={{ md: "40px", base: "30px" }}> Why ?</Heading>
      <Text fontSize={{ base: "14px", md: "16px" }} mt={"15px"}>
        Addressing problems and make informed decisions about your health will
        help you live a healthier life. Self-management may be a little bit
        hard, third-party applications can help you manage symptoms of your
        condition, improve eating and sleeping habits, reduce stress, maintain a
        healthy lifestyle, and more.
      </Text>
    </Box>
  );
};

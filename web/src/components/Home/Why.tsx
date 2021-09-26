import React from "react";
import { Box, Heading, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import thumb from "../../assets/why.jpeg";

export const Why: React.FC = () => {
  return (
    <Box p={"20px 3px"} w={{ lg: "60%", md: "80%", base: "100%" }} m={"auto"}>
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <GridItem colSpan={{ base: 6, md: 2 }}>
          <Image src={thumb} w={"100%"} rounded={"15px"} />
        </GridItem>
        <GridItem colSpan={{ base: 6, md: 4 }}>
          <Heading> Why ?</Heading>
          <Text textAlign={"left"} mt={"15px"}>
            Addressing problems and make informed decisions about your health
            can help you live a healthier life. Self-management may a little bit
            hard, third-part applications can help you manage symptoms of your
            condition, improve eating and sleeping habits, reduce stress,
            maintain a healthy lifestyle, and more
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

import React from "react";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";

export const Navigation: React.FC = () => {
  return (
    <Box p={"15px"} background={"black"} color={"white"}>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={6} textAlign={"left"}>
          <Heading
            fontWeight={"bold"}
            fontSize={{ md: "1.3rem", base: "1.2rem" }}
          >
            Open Chronic Conditions.
          </Heading>
        </GridItem>
        {/*
        <GridItem colSpan={3} textAlign={"right"}>
          <Heading
            fontWeight={"bold"}
            fontSize={{ md: "1.3rem", base: "1.2rem" }}
          >
            ✨ Available on iOS
          </Heading>
          </GridItem> */}
      </Grid>
    </Box>
  );
};

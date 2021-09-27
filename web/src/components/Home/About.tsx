import React from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Center,
} from "@chakra-ui/react";
import ss from "../../assets/ss.png";

export const About: React.FC = () => {
  return (
    <Box background={"#fceee7"} p={5}>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={{ md: 3, base: 6 }}>
          <Center>
            <Image w={"250px"} src={ss} />
          </Center>
        </GridItem>
        <GridItem colSpan={{ md: 3, base: 6 }}>
          <Center height={"100%"}>
            <Box textAlign={"center"}>
              <Heading>Records.</Heading>
              <Text>
                Better records help you visualize how your insulin doses,
                medications, food intake, carb counts, activity and all the
                important factors affect your chronic condition .
                <br />
                They help pinpoint other things that affect your condition like
                menses, stress, or an infection. Having this larger picture lets
                you sort out what leads to unwanted changes in your health. Your
                A1c level. frequency of hypoglycemia and overall control are
                determined by how well your medecations is matched to these
                lifestyle factors.{" "}
              </Text>
            </Box>
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
};

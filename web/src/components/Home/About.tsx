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

interface Props {
  title: string;
  text: string;
}

export const About: React.FC<Props> = ({ text, title }) => {
  return (
    <Box background={"#fff"} minH={"100vh"} p={5}>
      <Grid
        w={{ base: "100%", md: "70%" }}
        m={"auto"}
        templateColumns="repeat(6, 1fr)"
      >
        <GridItem colSpan={{ md: 3, base: 6 }}>
          <Center height={"100%"}>
            <Box textAlign={"left"} w={{ base: "100%", md: "80%" }}>
              <Heading>{title}</Heading>

              <Text
                mt={{ base: "25px", md: "0px" }}
                mb={{ base: "50px", md: 0 }}
              >
                {text}
              </Text>
            </Box>
          </Center>
        </GridItem>

        <GridItem colSpan={{ md: 3, base: 6 }}>
          <Center pos={"relative"}>
            <Image w={{ md: "300px", base: "150px" }} src={ss} />
          </Center>
        </GridItem>
      </Grid>
    </Box>
  );
};

import React from "react";
import { Box, Center, Heading, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import styled from "@emotion/styled";

export const Intro: React.FC = () => {
  return (
    <Center minH={"50vh"} background={"#000"} color={"white"}>
      <Box textAlign={"center"}>
        <Image src={logo} w={"100px"} m={"auto"} rounded={25} />
        <Heading
          textAlign={"center"}
          fontSize={{ md: "1.8rem", base: "1.4rem" }}
          fontWeight={"bold"}
          marginTop={"15px"}
        >
          Simplify complex chromic conditions patterns
        </Heading>
        <Button>
          <span style={{ fontSize: "18px" }}> </span>
          Available on iOS{" "}
        </Button>
      </Box>
    </Center>
  );
};

const Button = styled.button`
  background: #1002db;
  padding: 5px 20px 7px;
  border-radius: 50px;
  min-width: 120px;
  display: block;
  margin: auto;
  font-weight: bold;
  margin-top: 20px;
`;

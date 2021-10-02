import React from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import AppViewImg from "../../assets/app-view.png";
import styled from "@emotion/styled";

export const AppView: React.FC = () => {
  return (
    <Box bg={"#fceee7"} minH={"80vh"} pos={"relative"} marginTop={"65px"}>
      <Image
        src={AppViewImg}
        w={"300px"}
        pos={"absolute"}
        top={"-70px"}
        left={"50%"}
        transform={"translateX(-50%)"}
      />
      <Button>Early Access To OpenCC</Button>

      <Heading
        textShadow={"-15px 14px 30px #00000073"}
        fontSize={{ md: "37px", base: "25px" }}
        fontWeight={"bold"}
        d={"none"}
        pos={"absolute"}
        top={""}
        left={{ md: "40%", base: "12px" }}
        transform={{ md: "translateX(-40%)", base: "translateX(0%)" }}
        bottom={{ md: "30px", base: "15px" }}
      >
        Open Source, <br /> Free For Personal Use <br /> and Self Host!{" "}
      </Heading>
      <Text
        d={"none"}
        w={"100%"}
        pos={"absolute"}
        bottom={"20px"}
        textAlign={"center"}
      >
        Open CC is a open-source app for chronic conditions managment under
        AGPLv3 license{" "}
      </Text>
    </Box>
  );
};

const Button = styled.button`
  position: absolute;
  bottom: 40px;
  left: 50%;
  background: #ef9773;
  padding: 5px 30px;
  border-radius: 50px;
  font-weight: bold;
  color: white;
  transform: translateX(-50%);
  backdrop-filter: blur(5px);
  width: auto;
`;

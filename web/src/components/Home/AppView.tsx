import React from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import ss from "../../assets/ss.png";

export const AppView: React.FC = () => {
  return (
    <Box bg={"#fceee7"} minH={"100vh"} pos={"relative"} marginTop={"65px"}>
      <Image
        src={ss}
        w={"300px"}
        pos={"absolute"}
        top={"-70px"}
        left={"50%"}
        transform={"translateX(-50%)"}
        filter={"invert(1)"}
      />
      <Heading
        textShadow={"-15px 14px 30px #00000073"}
        fontSize={{ md: "37px", base: "32px" }}
        fontWeight={"bold"}
        pos={"absolute"}
        top={"270px"}
        left={{ md: "40%", base: "3px" }}
        transform={{ md: "translateX(-40%)", base: "translateX(0%)" }}
      >
        Open Source, <br /> Free For Personal Use <br /> and Self Host!{" "}
      </Heading>
      <Text>
        Open CC is a open-source app for chronic conditions managment, free to
        use self{" "}
      </Text>
    </Box>
  );
};

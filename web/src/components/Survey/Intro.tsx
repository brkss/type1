import React from "react";
import { Heading, Box, Text } from "@chakra-ui/react";
import { gsap } from "gsap";
import styled from "@emotion/styled";
import { Animated } from "react-animated-css";
import * as ReactIcons from "react-icons/all";

interface Props {
  onFinish: () => void;
}

export const SurveyIntro: React.FC<Props> = ({ onFinish }) => {
  const headingRef = React.useRef();
  const buttonRef = React.useRef();
  const [showButton, SetShowButton] = React.useState<boolean>(true);
  React.useEffect(() => {
    gsap.to(buttonRef.current as any, { opacity: 1, duration: 2, delay: 1 });
    gsap.to(headingRef.current as any, { opacity: 1, y: "-=20", duration: 2 });
  }, []);
  const start = () => {
    SetShowButton(false);
    gsap.to(headingRef.current as any, {
      //scale: ".9",
      y: -40,
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        console.log("log");
        onFinish();
      },
    });
  };

  return (
    <Box textAlign={"center"}>
      <Heading opacity={0} y={"40px"} fontSize={"50px"} ref={headingRef as any}>
        Hello
      </Heading>
      <Animated
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={showButton}
      >
        <Text fontSize={"12px"} textAlign={"center"}>
          {" "}
          <ReactIcons.BsFillLockFill style={{ display: "inline" }} /> The given
          data is private safe and secure.{" "}
        </Text>
        <Button ref={buttonRef as any} onClick={() => start()}>
          Start
        </Button>
      </Animated>
    </Box>
  );
};

const Button = styled.button`
  background: blue;
  padding: 3px 30px;
  border-radius: 50px;
  margin: 7px auto;
  color: white;
  font-weight: bold;
  display: block;
  opacity: 0;
`;

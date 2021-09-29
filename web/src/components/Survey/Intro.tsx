import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import { gsap } from "gsap";
import styled from "@emotion/styled";

export const SurveyIntro: React.FC = () => {
  const headingRef = React.useRef();
  const [showButtom, SetShowButton] = React.useState<boolean>(true);
  const start = () => {
    SetShowButton(false);
    gsap.to(headingRef.current as any, {
      scale: "+=200",
      duration: 3,
      onComplete: () => {
        console.log("log");
      },
    });
  };

  return (
    <Box>
      <Heading fontSize={"50px"} ref={headingRef as any}>
        Survey
      </Heading>
      {showButtom ? <Button onClick={() => start()}>Start</Button> : null}
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
`;

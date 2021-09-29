import React from "react";
import { Heading, Box } from "@chakra-ui/react";
import { gsap } from "gsap";
import styled from "@emotion/styled";

interface Props {
  onFinish: () => void;
}

export const SurveyIntro: React.FC<Props> = ({ onFinish }) => {
  const headingRef = React.useRef();
  const buttonRef = React.useRef();
  const [showButtom, SetShowButton] = React.useState<boolean>(true);
  React.useEffect(() => {
    gsap.to(buttonRef.current as any, { opacity: 1, duration: 2, delay: 1 });
    gsap.to(headingRef.current as any, { opacity: 1, y: "-=20", duration: 2 });
  }, []);
  const start = () => {
    SetShowButton(false);
    gsap.to(headingRef.current as any, {
      scale: "+=200",
      duration: 3,
      onComplete: () => {
        console.log("log");
        onFinish();
      },
    });
  };

  return (
    <Box>
      <Heading opacity={0} y={40} fontSize={"50px"} ref={headingRef as any}>
        Survey
      </Heading>
      {showButtom ? (
        <Button ref={buttonRef as any} onClick={() => start()}>
          Start
        </Button>
      ) : null}
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

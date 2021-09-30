import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { InputText, ButtonNav } from "../General";
import { Animated } from "react-animated-css";
import { useCreateAbandonedRecordMutation } from "../../generated/graphql";

interface Props {
  onFinish: () => void;
}

export const Information: React.FC<Props> = ({ onFinish }) => {
  const [visible, SetVisible] = React.useState(true);
  const [abandoned] = useCreateAbandonedRecordMutation();
  const [form, SetForm] = React.useState<any>();

  const handleForm = (id: string, value: string) => {
    SetForm({
      ...form,
      [id]: value,
    });
  };

  const next = () => {
    console.log("form : ", form);
    //SetVisible(false);
    //setTimeout(() => onFinish(), 1000);
  };

  return (
    <Box w={{ md: "40%", base: "80%" }}>
      <Animated
        animationIn="fadeInUp"
        animationOut="fadeOutUp"
        animationInDuration={1000}
        animationOutDuration={1000}
        isVisible={visible}
      >
        <Heading>Basic Informations</Heading>
      </Animated>
      <InputText
        label={"Full Name"}
        placeholder={"Full Name"}
        changed={(value: string) => handleForm("name", value)}
        visible={visible}
      />
      <InputText
        label={"Email  required so we can send you the invatation !"}
        placeholder={"Email"}
        changed={(value: string) => handleForm("email", value)}
        visible={visible}
      />
      <ButtonNav text={"Next"} visible={visible} clicked={() => next()} />
    </Box>
  );
};

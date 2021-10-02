import React from "react";
import { Box, Heading, useToast } from "@chakra-ui/react";
import { InputText, ButtonNav } from "../General";
import { Animated } from "react-animated-css";
import { useCreateAbandonedRecordMutation } from "../../generated/graphql";

interface Props {
  onFinish: (name: string, email: string) => void;
}

export const Information: React.FC<Props> = ({ onFinish }) => {
  const [visible, SetVisible] = React.useState(true);
  const [abandoned] = useCreateAbandonedRecordMutation();
  const [form, SetForm] = React.useState<any>();
  const [loading, SetLoading] = React.useState<boolean>(false);
  const toast = useToast();

  const handleForm = (id: string, value: string) => {
    SetForm({
      ...form,
      [id]: value,
    });
  };

  const next = () => {
    if (!form || !form.name || !form.email) {
      toast({
        title: "Please fill in all the required fields!",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    SetLoading(true);
    abandoned({ variables: { name: form.name, email: form.email } }).then(
      (res) => {
        SetLoading(false);
        if (res.errors || !res.data) {
          toast({
            title: "Something went wrong !",
            status: "warning",
            duration: 3000,
            isClosable: true,
          });
        }
        if (res.data!.createAbandoned.status) {
          SetVisible(false);
          setTimeout(() => onFinish(form.name, form.email), 1000);
        } else {
          toast({
            title: "Something went wrong !",
            status: "warning",
            duration: 3000,
            isClosable: true,
          });
        }
      }
    );
  };

  return (
    <Box w={{ md: "40%", base: "80%" }} opacity={loading ? 0.5 : 1}>
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
        label={"Email is required so you can recieve your private invatation !"}
        placeholder={"Email"}
        changed={(value: string) => handleForm("email", value)}
        visible={visible}
      />
      <ButtonNav text={"Next"} visible={visible} clicked={() => next()} />
    </Box>
  );
};

import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  jumpToPage: () => void;
  title: string;
}

export const MenuItem: React.FC<Props> = ({ jumpToPage, title }) => {
  return (
    <TouchableOpacity onPress={() => jumpToPage}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

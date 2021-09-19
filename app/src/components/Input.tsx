import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";

interface Props {
  label: string;
  onChangeText: (text: string) => void;
  password?: boolean;
}

const { width } = Dimensions.get("window");

export const Input: React.FC<Props> = ({ onChangeText, label, password }) => {
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.label}>{label} </Text>
      <TextInput
        autoCorrect={false}
        autoCapitalize={"none"}
        secureTextEntry={password}
        style={style.input}
        onChangeText={(text) => onChangeText(text)}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    width: "100%",
    color: "black",
    backgroundColor: "#D8D8D8",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    color: "black",
    fontWeight: "bold",
    fontSize: 14,
    marginBottom: 2,
  },
});

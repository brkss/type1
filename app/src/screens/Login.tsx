import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button, Input } from "../components";

export const Login: React.FC<any> = ({ navigation }) => {
  const [username, SetUsername] = React.useState("");
  const [password, SetPassword] = React.useState("");

  const validateLogin = () => {
    console.log(`username : ${username} \t password : ${password}`);
    navigation.navigate("home");
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Login</Text>
      <Input label="Username" onChangeText={(text) => SetUsername(text)} />
      <Input
        label="Password"
        onChangeText={(text) => SetPassword(text)}
        password={true}
      />
      <Button title="Login" onClick={() => validateLogin()} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
});

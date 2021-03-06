import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Button, Input } from "../components";
import { useLoginMutation } from "../generated/graphql";
import { AuthContext, setToken } from "../utils/auth/token";
import * as secureStore from "expo-secure-store";

const { width } = Dimensions.get("window");

export const Login: React.FC<any> = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const [username, SetUsername] = React.useState("");
  const [password, SetPassword] = React.useState("");
  const [login] = useLoginMutation();

  const handleLogin = () => {
    console.log(`username : ${username} \t password : ${password}`);
    // validate data
    if (!username || !password) {
      alert("Invalid Data !");
      return;
    }
    login({
      variables: {
        ident: username,
        password: password,
      },
    })
      .then(async (res) => {
        if (res.data) {
          if (res.data!.login.status == true) {
            console.log("Token saved !");
            setToken(res.data.login.token!);
            await secureStore.setItemAsync(
              "TOKEN",
              res.data.login.refreshToken!
            );
            //token = res.data.login.token!;
            signIn(res.data.login.token!);
          }
        }
      })
      .catch((e) => {
        console.log("login error => ", e);
      });
  };

  return (
    <View style={style.container}>
      <View style={style.wrap}>
        <Text style={style.title}>Login</Text>
        <Text style={style.subTitle}>
          Welcome back, {"\n"}You’ve been missed
        </Text>
        <View style={style.inputContainer}>
          <Input label="username" onChangeText={(text) => SetUsername(text)} />
          <Input
            label="password"
            onChangeText={(text) => SetPassword(text)}
            password={true}
          />
          <Button title="Login" onClick={() => handleLogin()} />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrap: {
    width: width * 0.8,
  },
  inputContainer: {
    marginTop: 25,
  },
  title: {
    color: "black",
    fontSize: 37,
    fontWeight: "bold",
  },
  subTitle: {
    color: "#272727",
    fontSize: 24,
    fontWeight: "normal",
  },
});

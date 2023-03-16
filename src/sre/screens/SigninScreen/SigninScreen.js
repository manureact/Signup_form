import { View, StyleSheet, Image, useWindowDimensions } from "react-native";
import logo from "/assets/images/Logo_1.png";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

function SigninScreen() {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSignInPressed = () => {
    console.warn("sign in");
  };
  const onForgetPressed = () => {
    console.warn("Forgot password..");
  };

  const onSignIngoogle = () => {
    console.warn("on sigin google");
  };
  const onSignupPress = () => {
    console.warn("create new account");
  };
  return (
    <View style={styles.root}>
      <Image
        source={logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton text="sign in" onPress={onSignInPressed} />

      <CustomButton
        text="Forgot password ?"
        bgColor="#FAE9EA"
        fgColor="red"
        onPress={onForgetPressed}
      />

      <CustomButton text="sign In with google" onPress={onSignIngoogle} />

      <CustomButton
        text="Don't have account? Create one"
        onPress={onSignupPress}
      />
    </View>
  );
}
export default SigninScreen;
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    maxHeight: 200
  }
});

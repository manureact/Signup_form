import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      ></TextInput>
    </View>
  );
};

export default CustomInput;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 1,
    paddingHorizontal: 10,
    marginVertical: 5
  },
  input: {}
});

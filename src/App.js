/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import SigninScreen from "./sre/screens/SigninScreen/SigninScreen";

import { SafeAreaView, StyleSheet } from "react-native";

function App() {
  return (
    <SafeAreaView style={styles.root}>
      <SigninScreen />
    </SafeAreaView>
  );
}

export default App;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f9fbfc"
  }
});

import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import Hello from "../components/Hello"


const Main: FC = () => {
  return (
    <View style={styles.container}>
        <Hello/>
    </View>
  );
};
export default Main;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
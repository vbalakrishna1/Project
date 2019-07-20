/*Lib Imports*/
import React from "react";
import { View, StatusBar } from "react-native";

/*Local Imports*/
import styles from "./styles";

const AppStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar
      backgroundColor={backgroundColor}
      barStyle="light-content"
      {...props}
    />
  </View>
);

export default AppStatusBar;

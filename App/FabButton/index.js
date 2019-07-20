import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";

const FabButton = props => (
  <View style={styles.buttonRender}>
    <TouchableWithoutFeedback onPress={() => props.openModal()}>
      <View style={[styles.editButton, { backgroundColor: "blue" }]}>
        <Icon name="plus" style={styles.buttonRenderIcon} />
      </View>
    </TouchableWithoutFeedback>
  </View>
);

export default FabButton;

const styles = StyleSheet.create({
  buttonRender: {
      flex:1,
    paddingTop: 20,
    alignItems: "flex-end",
    justifyContent: "flex-end"
   
  },
  editButton: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 20,
    right: 15,
    borderRadius: 40,
    width: 56,
    height: 56,
    elevation: 5
  },
  buttonRenderIcon: {
    color: "white",
    fontSize: 25
  }
});

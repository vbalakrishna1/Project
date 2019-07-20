import { StyleSheet } from "react-native";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#2481b3",
    alignItems: "center",
    justifyContent: "space-between",
    height: 52
  },
  CatagoryText: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    padding: 5
  },
  addressHead: {
    alignItems: "center",
    flexDirection: "row",
    padding: 13
  },
  saveText: {
    color: "#fff",
    fontSize: 16,
  },
  modalHeaderTitle: {
    fontSize: 16,
    flex: 1,
    color: "#fff",
    marginLeft: 5
  },
  backButton: {
    fontSize: 25,
    color: "white"
  },
  addproductcontainer: {
    flex: 1,
    backgroundColor: "#eee"
  },
  Bodycard: {
    backgroundColor: "#fff",
    margin: 5,
    marginVertical: 2,
    marginTop: 5,
    elevation: 1
  },
  label: {
    paddingHorizontal: 8,
    fontSize: 13
  },
  input: {
    marginHorizontal: 8,
    paddingVertical: 4
  },
  importantFields: {
    color: "red"
  },
  modalContainerView: {
    flex: 1
  },
    picker: {
      height: 50,
      width: 150,
      color: "#fff"
  }
});

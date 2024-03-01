import { StyleSheet } from "react-native";

export default StyleSheet.create({
  default: {
    height: 40,
    paddingHorizontal: 5,
  },
  highlight: {
    backgroundColor: "white",
    borderColor: "#eee",
    borderWidth: 1,
  },
  spacingIcon: {
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  leftIcon: {
    flexDirection: "row-reverse",
  },
});

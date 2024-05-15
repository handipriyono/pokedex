import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  itemWrapper: {
    flex: 1,
    margin: 5,
    padding: 5,
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "#A8A8A8",
    borderWidth: 1,
    borderRadius: 12,
    height: 221,
    marginBottom: 15,
  },
  image: {
    height: 180,
    resizeMode: "contain",
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pokeName: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 8,
  },
  name: {
    textTransform: "capitalize",
    fontSize: 16,
    fontFamily: Platform.select({
      android: "Roboto_500Medium",
      ios: "Roboto-Medium",
    }),
    textAlign: "center",
  },
});

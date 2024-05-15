import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
    paddingHorizontal: 25,
    gap: 10,
  },
  img: { width: 250, height: 300, backgroundColor: "#fff" },
  title: {
    fontSize: 20,
    marginTop: 10,
    fontFamily: Platform.select({
      android: "Roboto_500Medium",
      ios: "Roboto-Medium",
    }),
  },
  subTitle: {
    textAlign: "center",
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    fontFamily: Platform.select({
      android: "Roboto_500Regular",
      ios: "Roboto-Regular",
    }),
  },
  safeArea: { flex: 1, backgroundColor: "#fff" },
});

import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  safeAreaStyle: { flex: 1, backgroundColor: "#fff" },
  detailWrapper: { flex: 1, backgroundColor: "#fff", paddingBottom: 100 },
  imageWrapper: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  imgDetail: {
    height: 236,
    width: "100%",
  },
  ability: {
    backgroundColor: "#fff",
    marginTop: 10,
    paddingHorizontal: 16,
  },
  titleAbility: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: Platform.select({
      android: "Roboto_700Bold",
      ios: "Roboto-Bold",
    }),
  },
  itemAbility: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: Platform.select({
      android: "Roboto_400Regular",
      ios: "Roboto-Regular",
    }),
  },
  spriteTitleWrapper: {
    fontSize: 20,
    fontFamily: Platform.select({
      android: "Roboto_700Bold",
      ios: "Roboto-Bold",
    }),
    paddingHorizontal: 15,
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  spriteWrapper: {
    paddingHorizontal: 15,
    marginTop: 10,
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-between", // if you want to fill rows top to bottom
    alignItems: "flex-start", // if you want to fill rows left to right
  },
  imgSprite: { height: 115, width: "90%" },
  titleSectionWrapper: {
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  pokemonTitle: {
    textTransform: "capitalize",
    fontSize: 36,
    fontFamily: Platform.select({
      android: "Roboto_700Bold",
      ios: "Roboto-Bold",
    }),
  },
});

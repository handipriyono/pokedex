import { StyleSheet } from "react-native";

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
  titleAbility: { fontSize: 20, fontWeight: "700" },
  itemAbility: { fontSize: 14, fontWeight: "400" },
  spriteWrapper: {
    paddingHorizontal: 15,
    marginTop: 20,
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
    fontSize: 36,
    fontWeight: "700",
    fontFamily: "Roboto_700Bold",
  },
});

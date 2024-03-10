import { View, Text } from "react-native";
import { Image } from "expo-image";
import Styles from "../styles";
import { TSPrite } from "../../../commons/types/pokedex";

const SpriteGallery = ({ sprites }: TSPrite) => {
  return (
    <>
      <Text style={Styles.spriteTitleWrapper}>Sprite Gallery</Text>
      <View style={Styles.spriteWrapper}>
        {sprites?.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                minHeight: 80,
                width: "47%",
                marginBottom: 20,
                borderRadius: 5,
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "#A8A8A8",
              }}
            >
              <Image
                style={Styles.imgSprite}
                source={item}
                placeholder={"error"}
                contentFit="contain"
                transition={200}
              />
            </View>
          );
        })}
      </View>
    </>
  );
};
export default SpriteGallery;

import { View, Text } from "react-native";
import { Image } from "expo-image";
import { TSPrite } from "@commons/types/pokedex";
import Styles from "../styles";

const SpriteGallery = ({ sprites }: TSPrite) => {
  return (
    <>
      <Text style={Styles.spriteTitleWrapper}>Sprite Gallery</Text>
      <View style={Styles.spriteWrapper}>
        {sprites?.map((item, index) => {
          return (
            <View key={index} style={Styles.imgWrap}>
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

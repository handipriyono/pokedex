import { View, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import TitleSection from "./components/TitleSection";
import SpriteGallery from "./components/SpriteGallery";
import Abilities from "./components/Abilities";
import Styles from "./styles";
import useGetDetailPokemon from "./hooks/useGetDetailPokemon";

type TDetailScreen = {
  route: any;
};

function DetailScreen({ route }: TDetailScreen) {
  const { getSpritesValues, getAbilities, name } = useGetDetailPokemon({
    id: route?.params?.id,
  });

  const dataSelected = () => {
    return {
      id: route?.params?.id,
      name: name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${route?.params?.id}.png`,
    };
  };

  return (
    <SafeAreaView style={Styles.safeAreaStyle}>
      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={Styles.detailWrapper}>
          <View style={Styles.imageWrapper}>
            <Image
              style={Styles.imgDetail}
              source={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${route?.params?.id}.png`}
              placeholder={"pokedex"}
              contentFit="contain"
              transition={1000}
            />
          </View>
          <TitleSection item={dataSelected()} />
          <SpriteGallery sprites={getSpritesValues() as Array<string>} />
          <Abilities abilities={getAbilities()} />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DetailScreen;

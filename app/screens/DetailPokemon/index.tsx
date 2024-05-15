import { View, SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import TitleSection from "./components/TitleSection";
import SpriteGallery from "./components/SpriteGallery";
import Abilities from "./components/Abilities";
import useGetDetailPokemon from "./hooks/useGetDetailPokemon";
import { urlPokedex } from "@commons/constant/index";
import Styles from "./styles";

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
      imageUrl: `${urlPokedex}/${route?.params?.id}.png`,
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
              source={`${urlPokedex}/${route?.params?.id}.png`}
              placeholder={"pokedex"}
              contentFit="contain"
              transition={200}
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

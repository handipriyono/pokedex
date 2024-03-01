import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import PokemonList from "../../commons/components/ListPokemon";
import Styles from "./styles";
import { storage } from "../../commons/helpers/mkkv";
import { useFocusEffect } from "@react-navigation/native";

type TFavoritePokemon = {
  route: any;
  navigation: () => void;
};

function FavoritePokemon({ route, navigation }: TFavoritePokemon) {
  const [updateList, setUpdateList] = React.useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setUpdateList((prev) => !prev);
    }, [])
  );

  const listFavorite = () => {
    try {
      const stringFav = storage.getString("favorite");
      if (stringFav) {
        return JSON.parse(stringFav);
      } else {
        return [];
      }
    } catch (error) {
      return [];
    }
  };

  const listFavoriteMemo = React.useMemo(() => listFavorite(), [updateList]);

  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.favoriteWrapper}>
        <PokemonList
          isFavorite={true}
          navigation={navigation}
          data={listFavorite()}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

export default FavoritePokemon;

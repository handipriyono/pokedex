import React, { useMemo } from "react";
import { View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import PokemonList from "@commons/components/ListPokemon";
import { storage } from "@commons/helpers/mkkv";
import { useFocusEffect } from "@react-navigation/native";
import { TItemPokemon } from "@commons/types/pokedex";
import Styles from "./styles";

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

  function listFavorite(): Array<TItemPokemon> {
    try {
      const stringFav = storage.getString("pokedex.favorite");
      if (stringFav) {
        const valParse = JSON.parse(stringFav);
        return Object.values(valParse);
      } else {
        return [];
      }
    } catch (error) {
      return [];
    }
  }

  const getListFavorite = useMemo(() => listFavorite(), [updateList]);

  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.favoriteWrapper}>
        <PokemonList
          isFavorite={true}
          navigation={navigation}
          data={getListFavorite}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

export default FavoritePokemon;

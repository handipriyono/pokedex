import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import SearchBox from "./components/SearchBox";
import PokemonList from "../../commons/components/ListPokemon";
import Styles from "./style";
import useGetPokemonList from "./hooks/useGetPokemonList";
import useSearch from "./hooks/useSearch";

type THomePage = {
  route: any;
  navigation: () => void;
};

function HomePage({ route, navigation }: THomePage) {
  const { search, onSearch, debouncedSearch } = useSearch();
  const { data, fetchNextPage, isFetchingNextPage } = useGetPokemonList({
    debouncedSearch,
  });

  return (
    <SafeAreaView style={Styles.safeArea}>
      <View style={Styles.homeWrapper}>
        <SearchBox search={search} onSearch={onSearch} />
        <PokemonList
          fetchNextPage={fetchNextPage}
          navigation={navigation}
          data={data}
          isFetchingNextPage={isFetchingNextPage}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

export default HomePage;

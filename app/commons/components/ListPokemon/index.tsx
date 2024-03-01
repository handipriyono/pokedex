import { FlashList } from "@shopify/flash-list";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import Styles from "./style";
import React, { memo } from "react";

type TItemPokemon = {
  id: number | string;
  name: string;
  imageUrl?: string;
};

type TItemList = {
  item: TItemPokemon;
  navigation: any;
  isFavorite?: boolean;
};

type TListPokemon = {
  navigation: () => void;
  data: Array<TItemPokemon>;
  fetchNextPage?: any;
  isFavorite?: boolean;
};

const ItemList = ({ item, navigation, isFavorite }: TItemList) => {
  return (
    <View style={Styles.itemWrapper}>
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() =>
          navigation.navigate("DetailPokemon", {
            id: item.id,
          })
        }
      >
        <Image
          style={Styles.image}
          source={
            isFavorite
              ? item?.imageUrl
              : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item?.id}.png`
          }
          placeholder={"error"}
          contentFit="cover"
          transition={1000}
        />
        <View style={Styles.pokeName}>
          <Text style={Styles.name}>{item?.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ItemListMemo = memo(ItemList);

const ListPokemon = ({
  navigation,
  data,
  fetchNextPage,
  isFavorite,
}: TListPokemon) => {
  return (
    <>
      <FlashList
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => String(item?.name)}
        ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
        contentContainerStyle={{ padding: 0 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <ItemListMemo
            isFavorite={isFavorite}
            item={item}
            navigation={navigation}
          />
        )}
        estimatedItemSize={200}
        onEndReached={() => {
          if (fetchNextPage) {
            fetchNextPage();
          }
        }}
      />
    </>
  );
};

export default ListPokemon;

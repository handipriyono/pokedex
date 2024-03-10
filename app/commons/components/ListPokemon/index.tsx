import { FlashList } from "@shopify/flash-list";
import { Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import Styles from "./style";
import React, { memo } from "react";
import { TItemList, TListPokemon } from "../../types/pokedex";
import { urlPokedex } from "../../constant";

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
          source={isFavorite ? item?.imageUrl : `${urlPokedex}/${item?.id}.png`}
          placeholder={"error"}
          contentFit="cover"
          transition={null}
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
  isFetchingNextPage,
}: TListPokemon) => {
  return (
    <>
      <FlashList
        data={data}
        numColumns={2}
        extraData={data}
        keyExtractor={(item, index) => String(item?.id)}
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
        ListFooterComponent={() => {
          return isFetchingNextPage ? (
            <View style={{ flex: 1 }}>
              <ActivityIndicator />
            </View>
          ) : null;
        }}
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

import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, Text, View } from "react-native";
import Styles from "../styles";
import { storage } from "../../../commons/helpers/mkkv";
import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

type TItemPokemon = {
  id: number | string;
  name: string;
  imageUrl?: string;
};

const TitleSection = ({ item }: { item: TItemPokemon }) => {
  const [triggerCheck, setTriggerCheck] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setTriggerCheck((prev) => !prev);
    }, [])
  );

  const onSetFavorite = () => {
    try {
      const prev = storage.getString("favorite");
      if (prev) {
        const prevParsed = JSON.parse(prev);
        if (prevParsed?.find((x) => x.name === item.name)) {
          const newData = prevParsed.filter((x) => x.name !== item.name);
          storage.set("favorite", JSON.stringify(newData));
          setTriggerCheck((prev) => !prev);
          return;
        } else {
          const newData = prevParsed ? [...prevParsed, item] : [item];
          storage.set("favorite", JSON.stringify(newData));
        }
      } else {
        storage.set("favorite", JSON.stringify([item]));
        setTriggerCheck((prev) => !prev);
      }
      setTriggerCheck((prev) => !prev);
    } catch (error) {
      return;
    }
  };

  const isExist = useCallback(() => {
    try {
      const favorite: any = storage.getString("favorite");
      const dataParsed: Array<TItemPokemon> = JSON.parse(favorite);
      if (dataParsed?.find((x) => x.name === item.name)) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }, [triggerCheck, item?.name]);

  return (
    <>
      <View style={Styles.titleSectionWrapper}>
        <Text style={Styles.pokemonTitle}>{item?.name}</Text>
        <TouchableOpacity
          disabled={!item?.name || !item?.id}
          onPress={onSetFavorite}
          style={{ opacity: !item.name ? 0.5 : 1 }}
        >
          <MaterialIcons
            name={isExist() ? "favorite" : "favorite-border"}
            size={24}
            color={isExist() ? "orange" : "black"}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TitleSection;

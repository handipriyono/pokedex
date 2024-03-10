import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, Text, View } from "react-native";
import Styles from "../styles";
import { storage } from "../../../commons/helpers/mkkv";
import { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { TItemPokemon } from "../../../commons/types/pokedex";

const TitleSection = ({ item }: { item: TItemPokemon }) => {
  const [triggerCheckCount, setTriggerCheckCount] = useState(1);
  const [isFinishCheck, setIsFinishCheck] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    return () => {
      setTriggerCheckCount(1);
      onSetOnLeave();
    };
  }, [isFinishCheck]);

  useFocusEffect(
    useCallback(() => {
      setIsFinishCheck(false);
      setTriggerCheckCount((prev) => prev + 1);
    }, [])
  );

  const onSetOnLeave = () => {
    if (isFinishCheck) {
      const prevChecked: any = storage.getString(`pokedex.${item?.id}`);
      const prevItems = storage.getString("pokedex.favorite");

      if (prevItems) {
        const parsed = JSON.parse(prevItems);
        const cloned = { ...parsed };
        if (!prevChecked) {
          delete cloned[item?.id];
          storage.set("pokedex.favorite", JSON.stringify(cloned));
        } else {
          storage.set(
            "pokedex.favorite",
            JSON.stringify({ ...cloned, [item?.id]: item })
          );
        }
      } else {
        if (prevChecked) {
          storage.set("pokedex.favorite", JSON.stringify({ [item?.id]: item }));
        }
      }
    }
  };

  const onSetNewFavorite = () => {
    try {
      if (!item?.id && item?.name) {
        return;
      }
      const prev = storage.getString(`pokedex.${item?.id}`);
      if (prev) {
        storage.delete(`pokedex.${item?.id}`);
        setIsFavorite(false);
      } else {
        setIsFavorite(true);
        storage.set(`pokedex.${item?.id}`, JSON.stringify(item));
      }
    } catch (error) {
      return;
    }
  };

  const checkFavorite = () => {
    try {
      const prev = storage.getString(`pokedex.${item?.id}`);
      if (prev) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
      setIsFinishCheck(true);
    } catch (error) {
      setIsFavorite(false);
      setIsFinishCheck(true);
      return false;
    }
  };

  useEffect(() => {
    if (item?.id && item?.name) {
      checkFavorite();
    }
  }, [item, triggerCheckCount]);

  return (
    <>
      <View style={Styles.titleSectionWrapper}>
        <Text style={Styles.pokemonTitle}>{item?.name}</Text>
        {isFinishCheck && (
          <TouchableOpacity
            disabled={!item?.name || !item?.id}
            onPress={onSetNewFavorite}
            style={{ opacity: !item.name ? 0.5 : 1 }}
          >
            <MaterialIcons
              name={isFavorite ? "favorite" : "favorite-border"}
              size={24}
              color={!item.name ? "white" : isFavorite ? "orange" : "black"}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

export default TitleSection;

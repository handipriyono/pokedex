import { View, Text } from "react-native";
import { TAbility } from "@commons/types/pokedex";
import Styles from "../styles";

const Abilities = ({ abilities }: TAbility) => {
  return (
    <View style={Styles.ability}>
      <Text style={Styles.titleAbility}>Abilities</Text>
      {abilities?.map((item, index) => {
        return (
          <View key={index} style={{ paddingVertical: 6 }}>
            <Text style={Styles.itemAbility}>{item}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Abilities;

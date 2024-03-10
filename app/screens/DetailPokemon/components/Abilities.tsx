import { View, Text } from "react-native";
import Styles from "../styles";
import { TAbility } from "../../../commons/types/pokedex";

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

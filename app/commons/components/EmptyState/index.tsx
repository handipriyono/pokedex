import { View, Text } from "react-native";
import { Image } from "expo-image";
import Styles from "./style";

const NotFound = require("@assets/empty.svg");

const EmptyState = () => {
  return (
    <View style={Styles.wrapper}>
      <Image style={Styles.img} source={NotFound} />

      <Text style={Styles.title}>{"Favorites items Not Found!"}</Text>
      <Text style={Styles.subTitle}>
        {"The Favorites item is Empty, please add item from homepage first!"}
      </Text>
    </View>
  );
};

export default EmptyState;

import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import HomePage from "../screens/Homepage";
import DetailScreen from "../screens/DetailPokemon";
import FavoritePokemon from "../screens/FavoritePokemon";
import { MaterialIcons } from "@expo/vector-icons";

type RootStackParamList = {
  Home: undefined;
  DetailPokemon: { id: string | number };
  FavoritePokemon: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={({ navigation, route }) => ({
            headerTitle: "Pokedex",
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("FavoritePokemon");
                }}
              >
                <MaterialIcons name="favorite-border" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="DetailPokemon"
          component={DetailScreen}
          options={({ navigation, route }) => ({
            headerTitle: "Pokemon Detail",
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="FavoritePokemon"
          component={FavoritePokemon}
          options={({ navigation, route }) => ({
            headerTitle: "Favorite Pokemon",
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
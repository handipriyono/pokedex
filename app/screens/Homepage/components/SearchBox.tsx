import { TextInput, View } from "react-native";
import React from "react";
import Styles from "../style";

type TSearchParams = {
  search: string;
  onSearch: (value: string) => void;
};

const SearchBox = ({ search, onSearch }: TSearchParams) => {
  return (
    <View style={Styles.searchBoxWrapper}>
      <TextInput
        style={Styles.textInput}
        placeholder=" Search by name..."
        value={search}
        onChangeText={onSearch}
      />
    </View>
  );
};

export default SearchBox;

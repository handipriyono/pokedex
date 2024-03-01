import { TextInput, View, TouchableOpacity, Text } from "react-native";
import React, { useEffect, useState } from "react";
import useDebounceValue from "../../../commons/hooks/useDebounce";
import { storage } from "../../../commons/helpers/mkkv";
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

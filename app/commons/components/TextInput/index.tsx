import React from "react";
import { TextInput } from "react-native";
import Styles from "./style";

type TTextProps = {
  keyboardType?:
    | "default"
    | "number-pad"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "decimal-pad";
  placeholder?: string;
  maxLength?: number;
  multiline?: boolean;
  onChange?: (text: string) => void;
  value?: string;
  autoFocus?: boolean;
  style?: any;
  numberOfLines?: number;
};

const TextInputCustom = ({
  keyboardType,
  placeholder,
  maxLength,
  multiline,
  onChange,
  value,
  autoFocus,
  numberOfLines,
  style,
}: TTextProps) => {
  return (
    <>
      <TextInput
        autoCorrect={false}
        autoFocus={autoFocus}
        textAlignVertical={"top"}
        maxLength={maxLength}
        multiline={multiline}
        keyboardType={keyboardType}
        style={[Styles.default, style]}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
        numberOfLines={numberOfLines}
        //   clearButtonMode={'always'}
      />
    </>
  );
};

TextInputCustom.defaultProps = {
  keyboardType: "default",
  placeholder: "",
  maxLength: undefined,
  multiline: false,
  onChange: () => {},
  value: "",
  autoFocus: false,
  style: {},
  numberOfLines: 1,
};

export default TextInputCustom;

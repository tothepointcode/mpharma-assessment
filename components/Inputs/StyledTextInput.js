import React, { useState } from "react";
import { View } from "react-native";

// icon
import { FontAwesome5 } from "@expo/vector-icons";

// custom components
import { colors } from "../colors";
const { gray1, gray2, gray3, accent, neutral } = colors;
import SmallText from "../Texts/SmallText";

// styled components
import styled from "styled-components/native";

export const InputField = styled.TextInput`
  background-color: ${gray1};
  padding: 15px;
  padding-left: 60px;
  padding-right: 55px;
  border-radius: 10px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${neutral};
  border-color: ${gray1};
  border-width: 1px;
`;

export const InputLabel = styled.Text`
  color: ${neutral};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 36px;
  position: absolute;
  z-index: 1;
`;

const StyledTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  const [inputBorderColor, setInputBorderColor] = useState(gray1);

  const customOnBlur = () => {
    props?.onBlur;
    setInputBorderColor(gray1);
  };

  const customOnFocus = () => {
    props?.onFocus;
    setInputBorderColor(gray3);
  };

  return (
    <View>
      <LeftIcon>
        <FontAwesome5 name={icon} size={30} color={accent} />
      </LeftIcon>
      <SmallText>{label}</SmallText>
      <InputField
        {...props}
        onBlur={customOnBlur}
        onFocus={customOnFocus}
        placeholderTextColor={gray2}
        style={{ borderColor: inputBorderColor, ...props.style }}
      />
    </View>
  );
};

export default StyledTextInput;

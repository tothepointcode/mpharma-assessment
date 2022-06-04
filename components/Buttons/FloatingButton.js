import React from "react";
import styled from "styled-components/native";

//colors
import { colors } from "../colors";
import RegularText from "./../Texts/RegularText";

export const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.accent};
  justify-content: center;
  align-items: center;
  padding-left: 3px;
  border-radius: 50px;
  height: 70px;
  width: 70px;
  position: absolute;
  bottom: 25px;
  right: 25px;
`;

const FloatingButton = (props) => {
  return (
    <ButtonView onPress={props.onPress} {...props}>
      <RegularText
        style={[
          { color: colors.gray2, fontWeight: "bold" },
          { ...props?.textStyle },
        ]}
      >
        {props.children}
      </RegularText>
    </ButtonView>
  );
};

export default FloatingButton;

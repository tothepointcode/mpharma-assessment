import React from 'react';
import styled from 'styled-components/native';

//colors
import { colors } from '../colors';
import RegularText from './../Texts/RegularText';

export const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.accent};
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 60px;
`;

const RegularButton = (props) => {
  return (
    <ButtonView onPress={props.onPress} {...props}>
      <RegularText style={[{ color: colors.gray2 }, { ...props?.textStyle }]}>
        {props.children}
      </RegularText>
    </ButtonView>
  );
};

export default RegularButton;

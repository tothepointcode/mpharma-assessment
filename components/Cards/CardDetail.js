import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import SmallText from '../Texts/SmallText';
import { colors } from '../colors';
const { neutral, accent } = colors;

const CardDetail = ({ iconByIonicon, value, valuePreFix = '', ...props }) => {
  return (
    <SmallText style={{ color: neutral, width: '100%', marginBottom: 3 }} {...props} numberOfLines={1}>
      <Ionicons name={iconByIonicon} size={13} color={accent} style={{ paddingRight: 15 }} />
      {`  ${valuePreFix}${value}`}
    </SmallText>
  );
};

export default CardDetail;

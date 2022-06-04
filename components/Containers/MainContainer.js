import React from 'react';

// styled components
import styled from 'styled-components/native';

import { colors } from '../colors';
const { gray2 } = colors;

export const StyledView = styled.View`
  flex: 1;
  padding: 25px;
  background-color: ${gray2};
`;

const MainContainer = (props) => {
  return <StyledView {...props}>{props.children}</StyledView>;
};

export default MainContainer;

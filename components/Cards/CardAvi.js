import React from "react";
import styled from "styled-components/native";
import { ScreenWidth } from "../shared";

const StyledImage = styled.Image`
  resize-mode: cover;
  width: ${(ScreenWidth - 50) * 0.35}px;
  height: 100%;
`;

const CardAvi = (props) => {
  return <StyledImage style={props.imgStyle} source={props.img} />;
};

export default CardAvi;

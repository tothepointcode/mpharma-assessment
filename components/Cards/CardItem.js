import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

//colors
import { colors } from "./../colors";
const { gray1, accent } = colors;
import RegularText from "../Texts/RegularText";
import CardAvi from "./CardAvi";
import { ScreenWidth } from "../shared";
import CardDetail from "./CardDetail";

const CardRow = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: ${(ScreenWidth - 50) * 0.25}px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: ${gray1};
  overflow: hidden;
`;

const RightView = styled.View`
  height: 100%;
  padding-vertical: 15px;
  padding-horizontal: 15px;
  width: ${(ScreenWidth - 50) * 0.65}px;
`;

const ProductTitle = styled(RegularText)`
  color: ${accent};
  font-weight: bold;
  margin-bottom: 5px;
  text-align: left;
`;

// placeholder image
import placeholder from "./../../assets/imgs/drug_placeholder.jpg";

const CardItem = (props) => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("Details", {
      ...props,
    });
  };

  return (
    <CardRow onPress={handleOnPress}>
      <CardAvi img={placeholder} />

      <RightView>
        <ProductTitle>{props.name}</ProductTitle>
        <CardDetail
          iconByIonicon={"cash"}
          valuePreFix="GHS "
          value={props?.prices[0]?.price}
        />
      </RightView>
    </CardRow>
  );
};

export default CardItem;

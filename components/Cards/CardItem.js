import React, { useEffect, useState } from "react";
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
  const [currentPrice, setCurrentPrice] = useState("");

  const handleOnPress = () => {
    navigation.navigate("Details", {
      ...props,
      currentPrice,
    });
  };

  const deduceCurrentPrice = (prices) => {
    let latest = 0;

    for (let i = 0; i < prices.length; i++) {
      if (+new Date(prices[latest].date) < +new Date(prices[i].date)) {
        latest = i;
      }
    }

    setCurrentPrice(prices[latest]?.price);
    return prices[latest]?.price;
  };

  useEffect(() => {
    deduceCurrentPrice(props.prices);
  });

  return (
    <CardRow onPress={handleOnPress}>
      <CardAvi img={placeholder} />

      <RightView>
        <ProductTitle>{props.name}</ProductTitle>
        <CardDetail
          iconByIonicon={"cash"}
          valuePreFix="GHS "
          value={currentPrice}
        />
      </RightView>
    </CardRow>
  );
};

export default CardItem;

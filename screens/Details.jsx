import React from "react";
import styled from "styled-components/native";

// colors
import { colors } from "./../components/colors";
const { neutral, gray1, gray2, gray3, accent, success } = colors;

// custom components
import RegularText from "../components/Texts/RegularText";
import BigText from "../components/Texts/BigText";
import MainContainer from "../components/Containers/MainContainer";
import CardDetail from "../components/Cards/CardDetail";
import PriceItem from "../components/Prices/PriceItem";
import { ScreenWidth } from "../components/shared";

import placeholder from "./../assets/imgs/drug_placeholder.jpg";

const TopView = styled.View`
  flex-direction: column;
  height: ${(ScreenWidth - 50) * 0.4}px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

const StyledImage = styled.Image`
  resize-mode: cover;
  width: 100%;
  height: 100%;
`;

const DetailsView = styled.ScrollView``;

const SectionTitle = styled(BigText)`
  color: ${neutral};
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
  font-size: 25px;
`;

const Details = ({ navigation, route }) => {
  const { id, name, prices } = route?.params;

  return (
    <MainContainer>
      <DetailsView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 35 }}
      >
        <>
          <TopView style={{ marginBottom: 20 }}>
            <StyledImage source={placeholder} />
          </TopView>
          <SectionTitle>{name}</SectionTitle>

          <CardDetail
            iconByIonicon={"cash"}
            valuePreFix="GHS "
            value={prices[0].price}
            style={{ marginBottom: 15 }}
          />

          <SectionTitle
            style={{ fontSize: 20 }}
          >{`Price History`}</SectionTitle>

          {prices &&
            prices.map((item, index) => {
              return <PriceItem key={index} {...item} />;
            })}
        </>
      </DetailsView>
    </MainContainer>
  );
};

export default Details;

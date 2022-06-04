import React from "react";
import styled from "styled-components/native";
import { colors } from "../colors";
import RegularText from "../Texts/RegularText";

//colors
const { neutral, gray3, accent } = colors;
import SmallText from "./../Texts/SmallText";

const PriceItemView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  border-bottom-width: 1px;
  border-color: ${neutral};
  padding-bottom: 10px;
`;

const PriceItemTitle = styled(RegularText)`
  color: ${accent};
`;

const PriceSmallText = styled(SmallText)`
  font-weight: normal;
  color: ${gray3};
  font-size: 13px;
`;

const TicketItem = ({ price, date }) => {
  return (
    <PriceItemView>
      <PriceItemTitle>{`GHS ${price}`}</PriceItemTitle>
      <PriceSmallText>{`@ ${new Date(date).toDateString()}`}</PriceSmallText>
    </PriceItemView>
  );
};

export default TicketItem;

import React from "react";
import styled from "styled-components/native";

import { ActivityIndicator } from "react-native";

// custom components
import CardItem from "./CardItem";

// colors
import { colors } from "./../colors";
import SmallText from "../Texts/SmallText";
const { gray3 } = colors;

const StyledFlatList = styled.FlatList`
  width: 100%;
  margin-top: 15px;
`;

const CardList = ({ data, fetchingProducts, fetchProducts }) => {
  const emptyComponent = () => {
    return (
      <SmallText style={{ textAlign: "center", color: colors.gray3 }}>
        No data found
      </SmallText>
    );
  };
  if (fetchingProducts) {
    return (
      <ActivityIndicator size="small" color={gray3} style={{ marginTop: 10 }} />
    );
  }
  const footerComponent = () => {
    return <></>;
  };

  return (
    <StyledFlatList
      data={data}
      contentContainerStyle={{
        paddingBottom: 25,
      }}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => <CardItem {...item} />}
      onRefresh={fetchProducts}
      refreshing={fetchingProducts}
      ListEmptyComponent={emptyComponent}
      ListFooterComponent={footerComponent}
    />
  );
};

export default CardList;

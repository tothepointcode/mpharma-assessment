import React, { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

// colors
import { colors } from "./../components/colors";
const { neutral, gray1, accent } = colors;

// custom components
import BigText from "../components/Texts/BigText";
import MainContainer from "../components/Containers/MainContainer";
import CardDetail from "../components/Cards/CardDetail";
import PriceItem from "../components/Prices/PriceItem";
import RegularButton from "../components/Buttons/RegularButton";
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

const ModifiersView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-radius: 20px;
`;

const ModifierButton = styled(RegularButton)`
  background-color: ${gray1};
  margin-top: 5px;
  width: 45%;
`;

// product context
import { ProductContext } from "./../components/Contexts/ProductContext";

// api route
import { saveData } from "../components/shared";

const Details = ({ navigation, route }) => {
  const { id, name, prices, index, currentPrice } = route?.params;

  // product context
  const { products, setProducts } = useContext(ProductContext);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      // handle delete
      setIsDeleting(true);

      const updatedData = {
        ...products[index],
        deleted: true,
      };

      products[index] = updatedData;

      const updatedDataList = [...products];

      // // update storages
      await saveData("mPharmaProducts", JSON.stringify(updatedDataList));
      await setProducts(updatedDataList);

      // move to back to details page
      navigation.navigate("Products");
      setIsDeleting(false);
    } catch (error) {
      alert("Deleting failed: " + error);
      setIsDeleting(false);
    }
  };

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
            value={currentPrice}
            style={{ marginBottom: 15 }}
          />

          <SectionTitle
            style={{ fontSize: 20 }}
          >{`Price History`}</SectionTitle>

          {prices?.length &&
            prices.map((item, index) => {
              return <PriceItem key={index} {...item} />;
            })}

          <SectionTitle
            style={{ fontSize: 20, marginTop: 5 }}
          >{`Modifiers`}</SectionTitle>

          <ModifiersView>
            <>
              <ModifierButton
                textStyle={{ color: accent, fontStyle: "italic" }}
                onPress={() => {
                  // trigger edit
                  navigation.navigate("DataEntry", {
                    id,
                    name,
                    price: currentPrice.toString(),
                    index,
                  });
                }}
              >
                Edit <Ionicons name="pencil" size={16} color={accent} />
              </ModifierButton>

              {!isDeleting && (
                <ModifierButton
                  textStyle={{ color: accent, fontStyle: "italic" }}
                  onPress={() => {
                    // trigger delete
                    handleDelete(index);
                  }}
                >
                  Delete <Ionicons name="trash-bin" size={16} color={accent} />
                </ModifierButton>
              )}

              {isDeleting && (
                <ModifierButton
                  disabled
                  textStyle={{ color: accent, fontStyle: "italic" }}
                >
                  <ActivityIndicator size="small" color={accent} />
                </ModifierButton>
              )}
            </>
          </ModifiersView>
        </>
      </DetailsView>
    </MainContainer>
  );
};

export default Details;

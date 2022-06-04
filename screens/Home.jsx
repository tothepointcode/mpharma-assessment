import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

// custom components
import MainContainer from "../components/Containers/MainContainer";
import RegularText from "../components/Texts/RegularText";
import CardList from "../components/Cards/CardList";
import FloatingButton from "../components/Buttons/FloatingButton";

// api client
import axios from "axios";

// api route
import { dataAPIUrl, fetchData, saveData } from "../components/shared";

// colors
import { colors } from "./../components/colors";
const { gray2 } = colors;

const Home = ({ navigation }) => {
  // products
  const [fetchingProducts, setfetchingProducts] = useState(false);
  const [availableProducts, setAvailableProducts] = useState([]);

  const fetchProductsFromAPI = async () => {
    try {
      let config = {};
      let url = dataAPIUrl;

      const response = await axios.get(url, config);
      const { products } = response.data;

      return products;
    } catch (error) {
      throw error;
    }
  };

  const fetchProducts = async () => {
    try {
      setfetchingProducts(true);
      let products;

      // first check local storage
      const storedProducts = await fetchData("mPharmaProducts");

      if (storedProducts === null) {
        // no data so fetch from API
        products = await fetchProductsFromAPI();

        // then store in local storage
        await saveData("mPharmaProducts", JSON.stringify(products));
      } else {
        // data exists
        products = JSON.parse(storedProducts);
      }

      // make products accessible to app
      setAvailableProducts(products);
      setfetchingProducts(false);
    } catch (error) {
      alert("Products Fetch failed" + error);
      setfetchingProducts(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <MainContainer>
      <RegularText>Available Products</RegularText>
      <CardList
        data={availableProducts}
        fetchingProducts={fetchingProducts}
        fetchProducts={fetchProducts}
      />
      <FloatingButton
        onPress={() => {
          // move to add page
          navigation.navigate("DataEntry");
        }}
      >
        <Ionicons name="add" size={50} color={gray2} />
      </FloatingButton>
    </MainContainer>
  );
};

export default Home;

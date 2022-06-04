import React, { useState } from "react";

// custom components
import MainContainer from "../components/Containers/MainContainer";
import RegularText from "../components/Texts/RegularText";
import CardList from "../components/Cards/CardList";

const sampleData = [
  {
    id: 1,
    name: "Exforge 10mg",
    prices: [
      {
        id: 1,
        price: 10.99,
        date: "2019-01-01T17:16:32+00:00",
      },
      {
        id: 2,
        price: 9.2,
        date: "2018-11-01T17:16:32+00:00",
      },
    ],
  },
  {
    id: 2,
    name: "Exforge 20mg",
    prices: [
      {
        id: 3,
        price: 12.0,
        date: "2019-01-01T17:16:32+00:00",
      },
      {
        id: 4,
        price: 13.2,
        date: "2018-11-01T17:16:32+00:00",
      },
    ],
  },
  {
    id: 3,
    name: "Paracetamol 20MG",
    prices: [
      {
        id: 5,
        price: 5.0,
        date: "2017-01-01T17:16:32+00:00",
      },
      {
        id: 6,
        price: 13.2,
        date: "2018-11-01T17:16:32+00:00",
      },
    ],
  },
];

const Home = () => {
  // products
  const [fetchingProducts, setfetchingProducts] = useState(false);
  const [availableProducts, setavailableProducts] = useState([...sampleData]);

  const fetchProducts = async () => {
    
  };

  return (
    <MainContainer>
      <RegularText>Available Products</RegularText>
      <CardList
        data={availableProducts}
        fetchingProducts={fetchingProducts}
        fetchProducts={fetchProducts}
      />
    </MainContainer>
  );
};

export default Home;

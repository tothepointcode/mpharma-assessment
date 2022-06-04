import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import 'react-native-get-random-values';

// navigator
import RootStack from "./navigators/RootStack";

// product context
import { ProductContext } from "./components/Contexts/ProductContext";

export default function App() {
  const [products, setProducts] = useState("");

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      <StatusBar style="light" />
      <RootStack />
    </ProductContext.Provider>
  );
}

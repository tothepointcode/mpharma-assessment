import React, { useContext } from "react";
import { ActivityIndicator } from "react-native";

// formik
import { Formik } from "formik";

// colors
import { colors } from "./../components/colors";
const { gray2 } = colors;

// api route
import { saveData } from "../components/shared";

// product context
import { ProductContext } from "./../components/Contexts/ProductContext";

// uuid
import { v4 as uuidv4 } from "uuid";

// custom components
import RegularText from "../components/Texts/RegularText";
import MainContainer from "../components/Containers/MainContainer";
import StyledTextInput from "../components/Inputs/StyledTextInput";
import RegularButton from "../components/Buttons/RegularButton";

const DataEntry = ({ route, navigation }) => {
  // product context
  const { products, setProducts } = useContext(ProductContext);

  const editId = route?.params?.index;
  const productId = route?.params?.id;

  const handleOnSubmit = async ({ name, price }, setSubmitting) => {
    try {
      // handle data addition or edit here
      const newData = {
        id: uuidv4(),
        name,
        prices: [
          {
            id: uuidv4(),
            price,
            date: Date.now(),
          },
        ],
      };

      const newDataList = [...products, newData];

      // update storages
      await saveData("mPharmaProducts", JSON.stringify(newDataList));
      await setProducts(newDataList);

      // move to products page
      navigation.navigate("Products");
      setSubmitting(false);
    } catch (error) {
      alert("Adding failed: " + error);
      setSubmitting(false);
    }
  };

  const handleEdit = async ({ name, price }, setSubmitting) => {
    try {
      // handle data edit

      const updatedData = {
        id: productId,
        name,
        prices: [
          ...products[editId]?.prices,
          {
            id: uuidv4(),
            price,
            date: Date.now(),
          },
        ],
      };

      products[editId] = updatedData;

      const updatedDataList = [...products];

      // // update storages
      await saveData("mPharmaProducts", JSON.stringify(updatedDataList));
      await setProducts(updatedDataList);

      // move to back to details page
      navigation.navigate("Details", { ...updatedData, currentPrice: price });
      setSubmitting(false);
    } catch (error) {
      alert("Updating failed: " + error);
      setSubmitting(false);
    }
  };

  return (
    <MainContainer>
      <RegularText style={{ marginBottom: 15, textAlign: "left" }}>
        {route?.params?.id ? `Update product details` : `Enter product details`}
      </RegularText>

      <Formik
        initialValues={{
          name: route?.params?.name || "",
          price: route?.params?.price || "",
        }}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          if (!values.name || !values.price) {
            alert("Please fill in all fields");
            setSubmitting(false);
          } else {
            if (route?.params?.id) {
              return handleEdit(values, setSubmitting);
            }
            return handleOnSubmit(values, setSubmitting);
          }
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
          <>
            <StyledTextInput
              label="Product Name"
              placeholder="Exforge 10mg"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              icon="pills"
              style={{ marginBottom: 15 }}
            />

            <StyledTextInput
              label="Price"
              placeholder="10.99"
              onChangeText={handleChange("price")}
              onBlur={handleBlur("price")}
              value={values.price}
              keyboardType={"number-pad"}
              icon="money-bill-wave"
              style={{ marginBottom: 35 }}
            />

            {!isSubmitting && (
              <RegularButton onPress={handleSubmit}>Submit</RegularButton>
            )}
            {isSubmitting && (
              <RegularButton disabled={true}>
                <ActivityIndicator size="small" color={gray2} />
              </RegularButton>
            )}
          </>
        )}
      </Formik>
    </MainContainer>
  );
};

export default DataEntry;

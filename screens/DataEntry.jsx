import React from "react";
import { ActivityIndicator } from "react-native";

// formik
import { Formik } from "formik";

// colors
import { colors } from "./../components/colors";
const { gray2 } = colors;

// custom components
import RegularText from "../components/Texts/RegularText";
import MainContainer from "../components/Containers/MainContainer";
import StyledTextInput from "../components/Inputs/StyledTextInput";
import RegularButton from "../components/Buttons/RegularButton";

const DataEntry = ({ route }) => {
  const handleOnSubmit = async (values, setSubmitting) => {
    // handle data addition or edit here
  };

  return (
    <MainContainer>
      <RegularText style={{ marginBottom: 15, textAlign: "left" }}>
        Enter product details
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
            handleOnSubmit(values, setSubmitting);
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

import React from "react";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// Screens
import Home from "./../screens/Home";

//colors
import { colors } from "./../components/colors";
const { gray2, accent } = colors;

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Products"
        screenOptions={{
          headerTintColor: accent,
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerStyle: {
            backgroundColor: gray2,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
          },
        }}
      >
        <Stack.Screen name="Products" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

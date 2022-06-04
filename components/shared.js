import { Dimensions } from "react-native";

export const ScreenWidth = Dimensions.get("screen").width;
export const ScreenHeight = Dimensions.get("screen").height;

export const dataAPIUrl = "http://www.mocky.io/v2/5c3e15e63500006e003e9795";

// local data storage
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (key, value) => {
  await AsyncStorage.setItem(key, value);
};

export const fetchData = async (key) => {
  return await AsyncStorage.getItem(key);
};

import { StatusBar } from "expo-status-bar";

// navigator
import RootStack from "./navigators/RootStack";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <RootStack />
    </>
  );
}

import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import NavigationApp from "./src/screens/NavigationApp";

export default function App() {
  return (
    <>
      <NavigationApp />
      <StatusBar style="auto" />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

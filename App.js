import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import NavigationApp from "./src/screens/NavigationApp";
import { Provider } from "react-redux"
import store from "./src/redux/store";

export default function App() {
  return (
    <>
    <Provider store={store}>
      <NavigationApp />
      <StatusBar style="auto" />
    </Provider>
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

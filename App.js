import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import "react-native-gesture-handler";
import RootStack from "./src/stacks/index";
import store from "./src/store/store";

const getFonts = () =>
  Font.loadAsync({
    Inter: require("./src/assets/fonts/inter.ttf"),
  });

export default function App() {
  const [loadFont, setLoadFont] = useState(false);
  if (loadFont) {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <RootStack />
        </View>
      </Provider>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setLoadFont(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

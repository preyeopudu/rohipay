import React from "react";
import { Image, View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Action from "../../components/Action";
import { useNavigation } from "@react-navigation/native";

const SuccesfulScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.ScreenContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/Shape.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>New password set successfully!</Text>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Action
          fill={true}
          onPress={() => {
            navigate("Login");
          }}
        >
          Close
        </Action>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    height: "81@s",
    width: "81@s",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 5,
  },
  textContainer: {
    width: "300@s",
    marginVertical: "25@s",
  },
  text: {
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: "normal",
    fontSize: "20@s",
    color: "#42526E",
  },
  bottomContainer: {
    width: "300@s",
    justifyContent: "flex-end",
    marginBottom: 36,
    flex: 1,
  },
});

export default SuccesfulScreen;

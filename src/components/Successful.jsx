import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Action from "./Action";
import { useNavigation } from "@react-navigation/native";

const Success = (props) => {
  const { navigate } = useNavigation();
  const [show, SetShow] = useState(true);
  return (
    <View style={styles.ScreenContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/celebration.png")}
        />
        <Text style={[styles.text, { marginTop: 30 }]}>
          {props.text} account created
        </Text>
        <Text style={styles.text}>Successfuly!</Text>
      </View>

      <View style={styles.textContainer}>
        <Action
          onPress={() => {
            navigate("Home");
          }}
          fill={true}
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
    width: "100%",
  },
  image: {
    width: "80%",
    height: "50%",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 5,
    width: "100%",
    height: "100%",
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

export default Success;

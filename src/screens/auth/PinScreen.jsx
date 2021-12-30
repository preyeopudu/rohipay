import React from "react";
import {
  View,
  Keyboard,
  Text,
  StatusBar,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { TextInput } from "react-native-paper";
import { scale, ScaledSheet } from "react-native-size-matters";
import Action from "../../components/Action";
import { useNavigation } from "@react-navigation/native";
import Navheader from "../../components/NavHeader";
import { TouchableOpacity } from "react-native-gesture-handler";

const PinScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <TouchableWithoutFeedback
        style={{ height: "100%" }}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={{ alignItems: "center", width: "100%", flex: 1 }}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={require("../../assets/images/icon.png")}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              label="PIN"
              mode="outlined"
              theme={{
                colors: {
                  placeholder: "grey",
                  background: "#f5f6f5",
                  text: "grey",
                  primary: "#2C4389",
                },
              }}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.forgotContainer}>
            <TouchableOpacity
              onPress={() => {
                navigate("Forgot");
              }}
            >
              <Text>Forgot PIN?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomContainer}>
            <Action fill={true}>Log in</Action>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = ScaledSheet.create({
  imgContainer: {
    alignItems: "center",
    marginBottom: "25@s",
  },
  img: {
    height: "60@s",
    width: "60@s",
    marginTop: 70,
  },
  heading: {
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: "22@s",
    color: "#42526E",
  },
  subheading: {
    fontWeight: "normal",
    color: "#42526E",
    fontSize: "13@s",
    fontFamily: "Inter",
    marginTop: "10@s",
  },
  buttonContainer: {
    marginVertical: "40@s",
  },
  inputContainer: {
    width: "300@s",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    fontSize: "14@s",
    width: "300@s",
  },
  forgotContainer: {
    alignItems: "flex-end",
    width: "300@s",
    marginTop: 15,
    fontSize: "14@s",
    fontFamily: "Inter",
    color: "#42526E",
  },
  bottomContainer: {
    width: "300@s",
    justifyContent: "flex-end",
    marginBottom: 36,
    flex: 1,
  },
});

export default PinScreen;

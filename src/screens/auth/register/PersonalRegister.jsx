import React, { useState } from "react";
import {
  View,
  TextInput,
  Keyboard,
  Text,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import Action from "../../../components/Action";
import { useNavigation } from "@react-navigation/native";
import Navheader from "../../../components/NavHeader";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAvoidingView } from "react-native-web";

const PersonalRegister = () => {
  const { navigate } = useNavigation();
  const [show, SetShow] = useState(true);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <Navheader />
      <TouchableWithoutFeedback
        style={{ height: "100%", flex: 1 }}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={{ alignItems: "center", width: "100%", flex: 1 }}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={require("../../../assets/images/icon.png")}
            />
          </View>

          <View>
            <Text style={styles.heading}>Create your personal account</Text>
          </View>
          <ScrollView style={{ marginTop: 20 }}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Email or Mobile number"
                style={styles.input}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry={show}
              />

              <View style={styles.inputIcon}>
                <TouchableOpacity>
                  <Ionicons
                    name="eye-outline"
                    size={25}
                    color="#7A869A"
                    activeOpacity={0.5}
                    onPress={() => SetShow(!show)}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.pinContainer}>
              <View
                style={[
                  styles.inputContainer,
                  { flex: 1, marginHorizontal: 5 },
                ]}
              >
                <TextInput
                  placeholder="PIN"
                  style={styles.input}
                  keyboardType="numeric"
                />
              </View>
              <View
                style={[
                  styles.inputContainer,
                  { flex: 1, marginHorizontal: 5 },
                ]}
              >
                <TextInput
                  placeholder="Confirm PIN"
                  keyboardType="numeric"
                  style={styles.input}
                />
              </View>
            </View>
          </ScrollView>

          <View style={styles.bottomContainer}>
            <Action
              fill={true}
              onPress={() => {
                navigate("personalotp");
              }}
            >
              Sign Up
            </Action>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text
                style={{
                  marginRight: 5,
                  fontSize: scale(12),
                  color: "#42526E",
                }}
              >
                Already have an account?
              </Text>
              <View>
                <TouchableOpacity onPress={() => navigate("Login")}>
                  <Text style={{ fontSize: scale(12), color: "#42526E" }}>
                    Log in
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = ScaledSheet.create({
  scrollContainer: {
    width: "100%",
  },
  imgContainer: {
    alignItems: "center",
    marginBottom: "18@s",
  },
  img: {
    height: "60@s",
    width: "60@s",
  },
  heading: {
    fontFamily: "Inter",
    fontWeight: "normal",
    fontSize: "19@s",
    color: "#42526E",
    textAlign: "center",
  },
  buttonContainer: {
    marginVertical: "40@s",
  },
  inputContainer: {
    backgroundColor: "#FAFBFC",
    borderWidth: 1,
    borderColor: "#DFE1E6",
    width: "300@s",
    paddingVertical: 10,
    marginVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    fontSize: "14@s",
    width: "156@s",
    marginLeft: 30,
  },
  inputIcon: {
    marginRight: 30,
  },
  bottomContainer: {
    width: "300@s",
    justifyContent: "flex-end",
    marginBottom: 36,
    flex: 1,
  },
  pinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default PersonalRegister;

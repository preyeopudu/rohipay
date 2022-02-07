import React from "react";
import {
  View,
  TextInput,
  Keyboard,
  Text,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import Action from "../../components/Action";
import { useNavigation } from "@react-navigation/native";
import Navheader from "../../components/NavHeader";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../../store/actions/index";
import { useState } from "react";
import { GETTOTP } from "../../api/auth-api";
import { Loading } from "../../components/Loading";

const RegisterScreen = () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const handleNext = async () => {
    if (email === "" || password === "" || confirm === "" || username == "") {
      Alert.alert("Signup error!!", "You left a field empty");
    } else {
      if (password != confirm) {
        Alert.alert("Signup error!!", "Passwords do not match");
      } else {
        setLoading(true);
        const GetOtp = await GETTOTP({ email });
        console.log(GetOtp);
        setLoading(false);
        navigate("OTP", {
          email: email,
          password: password,
          username: username,
        });
      }
    }
  };

  if (loading) {
    return <Loading />;
  }

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
              placeholder="Email address"
              style={styles.input}
              onChangeText={(val) => setEmail(val)}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="username"
              style={styles.input}
              onChangeText={(val) => setUsername(val)}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Password"
              style={styles.input}
              secureTextEntry
              onChangeText={(val) => setPassword(val)}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Confirm Password"
              style={styles.input}
              secureTextEntry
              onChangeText={(val) => setConfirm(val)}
            />
          </View>

          <View style={styles.bottomContainer}>
            <Action fill={true} onPress={handleNext}>
              Next
            </Action>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text
                style={{
                  marginRight: 5,
                  fontSize: scale(12),
                  color: "#42526E",
                }}
              >
                have account?
              </Text>
              <View>
                <TouchableOpacity>
                  <Text style={{ fontSize: scale(12), color: "#42526E" }}>
                    Sign In
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
  imgContainer: {
    alignItems: "center",
    marginBottom: "25@s",
  },
  img: {
    height: "60@s",
    width: "60@s",
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
    backgroundColor: "#FAFBFC",
    borderWidth: 1,
    borderColor: "#DFE1E6",
    width: "300@s",
    paddingVertical: 10,
    marginVertical: 12,
  },
  input: {
    fontSize: "14@s",
    width: "156@s",
    marginLeft: 30,
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

export default RegisterScreen;

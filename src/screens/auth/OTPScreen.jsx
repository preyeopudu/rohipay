import React, { useState } from "react";
import {
  View,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import Action from "../../components/Action";
import { useNavigation } from "@react-navigation/native";
import Navheader from "../../components/NavHeader";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CREATEACCOUNT } from "../../api/auth-api";
import { TextInput } from "react-native-paper";
import { Loading } from "../../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { Token } from "../../store/actions";
const OTPScreen = ({ route }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState(route.params.email);
  const [password, setPassword] = useState(route.params.password);
  const [username, setUsername] = useState(route.params.username);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    if (otp == "" || otp.length < 4) {
      Alert.alert("KIndly fill otp code");
    } else {
      setLoading(true);
      const CreateAccount = await CREATEACCOUNT({
        email: email,
        password: password,
        username: username,
      });
      if (!CreateAccount.data) {
        if (CreateAccount.err == "Network error") {
          setLoading(false);
          Alert.alert("Unable to connect", "check internet settings");
        } else if (CreateAccount.err == "401") {
          setLoading(false);
          Alert.alert("Signup error!", "Try another!");
        }
      } else if (CreateAccount.data) {
        setLoading(false);
        console.log(CreateAccount.headers.authorization);
        dispatch(Token(CreateAccount.headers.authorization));
        navigate("Account", {
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
        style={{ height: "100%", flex: 1 }}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View style={{ alignItems: "center", width: "100%", flex: 1 }}>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>Forgot your PIN?</Text>
            <Text style={styles.subheading}>
              Please enter the OTP sent to {route.params.email.slice(0, 8)}..
            </Text>
          </View>

          <View
            style={{ width: "100%", alignItems: "center", marginVertical: 40 }}
          >
            <TextInput
              style={{ width: "90%", textAlign: "center", fontSize: 25 }}
              maxLength={4}
              onChangeText={(val) => {
                setOtp(val);
              }}
            />
          </View>

          <View style={styles.bottomContainer}>
            <Action
              fill={true}
              onPress={() => {
                handleSubmit();
              }}
            >
              Confirm code
            </Action>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text
                style={{
                  marginRight: 5,
                  fontSize: scale(12),
                  color: "#42526E",
                }}
              >
                Didn’t receive anything?
              </Text>
              <View>
                <TouchableOpacity>
                  <Text style={{ fontSize: scale(12), color: "#42526E" }}>
                    Resend code
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
  textContainer: {
    width: "300@s",
    marginTop: "25@s",
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
    fontSize: "12@s",
    fontFamily: "Inter",
    marginVertical: "10@s",
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
    fontSize: "12@s",
    width: "260@s",
    marginLeft: 20,
  },
  bottomContainer: {
    width: "300@s",
    justifyContent: "flex-end",
    marginBottom: 50,
    flex: 1,
  },
  otpContainer: {
    alignItems: "center",
    width: "100%",
  },

  underlineStyleBase: {
    width: 60,
    height: 60,
    borderWidth: 1,
    backgroundColor: "#FAFBFC",
  },

  underlineStyleHighLighted: {
    borderColor: "#DFE1E6",
  },
});

export default OTPScreen;

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
import { SIGNIN } from "../../api/auth-api";
import { Loading } from "../../components/Loading";
import { useState } from "react";
import {
  Token,
  GetAccount,
  SetMerchant,
  SetPersonal,
  LogIn,
} from "../../store/actions/index";
import {
  GET_ALL_ACCOUNTS_BY_MERCHANT_ID,
  GET_CUSTOMERS_BY_DTO_EMAIL,
  GET_CUSTOMERS_BY_DTO_ID,
  GET_DETAILS_DTO_BY_MERCHANT_EMAIL,
} from "../../api/account-api";

const LoginScreen = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [loading, Setloading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    dispatch(LogIn());
    // Setloading(true);
    // if (email == "" || password == "") {
    //   Setloading(false);
    //   Alert.alert("Login error", "You left a field empty");
    // } else {
    //   const SignIn = await SIGNIN({ username: email, password: password });
    //   const body = { id: email };
    //   if (SignIn.err) {
    //     if (SignIn.err == "Request failed with status code 403") {
    //       Alert.alert("Unauthorized !!!", "Invalid details");
    //     } else {
    //       Alert.alert("Error Occurred", SignIn.err);
    //     }

    //     Setloading(false);
    //   } else {
    //     dispatch(Token(SignIn.headers.authorization));
    //     const token = SignIn.headers.authorization;
    //     const GetAllCustomersByEmail = await GET_CUSTOMERS_BY_DTO_EMAIL(
    //       body,
    //       token
    //     );
    //     if (GetAllCustomersByEmail.data) {
    //       dispatch(SetPersonal(GetAllCustomersByEmail.data));
    //       if ((GetAllCustomersByEmail.data.status = "Active")) {
    //         const GetAllCustomersByID = await GET_CUSTOMERS_BY_DTO_ID({
    //           id: GetAllCustomersByEmail.data.customerID,
    //         });
    //         console.log(GetAllCustomersByID);
    //         dispatch(GetAccount(GetAllCustomersByID.data));
    //       }
    //     }

    //     const GetDetailsDTOByMerchantEmail =
    //       await GET_DETAILS_DTO_BY_MERCHANT_EMAIL(body, token);
    //     console.log(GetDetailsDTOByMerchantEmail);
    //     if (GetDetailsDTOByMerchantEmail.data) {
    //       dispatch(SetMerchant(GetDetailsDTOByMerchantEmail.data));
    //       if (GetDetailsDTOByMerchantEmail.data == "Active") {
    //         const GetMerchant = GET_ALL_ACCOUNTS_BY_MERCHANT_ID(
    //           GetDetailsDTOByMerchantEmail.data
    //         );
    //         dispatch(GetAccount(GetMerchant.data));
    //       }
    //     }

    //     dispatch(LogIn());
    //     Setloading(false);
    //   }
    // }
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
              placeholder="Username"
              style={styles.input}
              onChangeText={(val) => setEmail(val)}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
              onChangeText={(val) => setPassword(val)}
            />
          </View>

          <View style={styles.forgotContainer}>
            <TouchableOpacity
              onPress={() => {
                navigate("Forgot");
              }}
            >
              <Text>Forgot your password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomContainer}>
            <Action
              fill={true}
              onPress={() => {
                handleLogin();
              }}
            >
              Log in
            </Action>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text
                style={{
                  marginRight: 5,
                  fontSize: scale(12),
                  color: "#42526E",
                }}
              >
                Do not have account?
              </Text>
              <View>
                <TouchableOpacity>
                  <Text style={{ fontSize: scale(12), color: "#42526E" }}>
                    Sign Up
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

export default LoginScreen;

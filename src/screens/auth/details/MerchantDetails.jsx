import React, { useState } from "react";
import {
  View,
  TextInput,
  Keyboard,
  Text,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  Alert,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import Action from "../../../components/Action";
import { useNavigation } from "@react-navigation/native";
import Navheader from "../../../components/NavHeader";
import { Picker } from "@react-native-picker/picker";
import { CREATEMERCHANT } from "../../../api/account-api";
const MerchantDetails = ({ route }) => {
  const { navigate } = useNavigation();
  const [business, setBusiness] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState(route.params.email);
  const [password, setPassword] = useState(route.params.password);
  const [username, setUsername] = useState(route.params.username);

  const handleSubmit = async () => {
    if (businessType === "" || business === "" || country === "") {
      Alert.alert("Error!!!", "Kindly complete your details");
    } else {
      navigate("NextDetails", {
        email: email,
        password: password,
        username: username,
        business: business,
        businessType: businessType,
        country: country,
        type: "Merchant",
      });
    }
  };

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

          <View style={styles.headingContainer}>
            <Text style={styles.heading}>
              Merchant information of signatory
            </Text>
          </View>

          <ScrollView
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Business Name"
                style={styles.input}
                onChangeText={(val) => {
                  setBusiness(val);
                }}
              />
            </View>

            <View style={[{ flex: 1, marginTop: 20 }, styles.pin]}>
              <Picker
                selectedValue={businessType}
                onValueChange={(itemValue, itemIndex) =>
                  setBusinessType(itemValue)
                }
                style={{ marginHorizontal: 10 }}
              >
                <Picker.Item label="Buisness type" enabled={false} />
                <Picker.Item label="Private company" value="Private company" />
                <Picker.Item
                  label="Public Company for Profit"
                  value="Public Company for Profit"
                />
                <Picker.Item
                  label="Sole Trader/Self Employed"
                  value="Sole Trader/Self Employed"
                />
                <Picker.Item
                  label="Non-Profit Company"
                  value="Non-Profit Company"
                />
              </Picker>
            </View>

            <View style={styles.pinContainer}>
              <View
                style={[
                  styles.inputContainer,
                  { flex: 1, marginHorizontal: 5 },
                ]}
              >
                <TextInput
                  placeholder="Business Country"
                  style={styles.input}
                  onChangeText={(val) => {
                    setCountry(val);
                  }}
                />
              </View>
            </View>
          </ScrollView>

          <View style={styles.bottomContainer}>
            <Action
              fill={true}
              onPress={() => {
                handleSubmit();
              }}
            >
              Next
            </Action>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = ScaledSheet.create({
  scrollContainer: {
    width: "300@s",
    backgroundColor: "#fff",
    height: "30%",
    marginTop: 30,
  },
  imgContainer: {
    marginVertical: "18@s",
    width: "300@s",
  },
  img: {
    height: "32@s",
    width: "32@s",
  },
  heading: {
    fontFamily: "Inter",
    fontWeight: "normal",
    fontSize: "15@s",
    color: "#42526E",
    textAlign: "left",
    alignItems: "flex-start",
  },
  headingContainer: {
    width: "300@s",
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
  pin: {
    backgroundColor: "#FAFBFC",
    borderColor: "#DFE1E6",
    borderWidth: 1,
    marginHorizontal: 5,
  },
});

export default MerchantDetails;

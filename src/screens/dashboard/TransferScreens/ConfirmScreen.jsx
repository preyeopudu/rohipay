import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/core";
import Action from "../../../components/Action";
import Navheader from "../../../components/NavHeader";
import { Picker } from "@react-native-picker/picker";

const ConfirmScreen = () => {
  const navigation = useNavigation();
  const [currency, setCurrency] = useState();
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Navheader title="Confirm Recipient’s Details" />

      <View
        style={{
          backgroundColor: "#FAFBFC",
          borderWidth: 1,
          alignSelf: "center",
          marginTop: 20,
          width: "85%",
          borderColor: "#FAFBFC",
        }}
      >
        <View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 20,
              }}
            >
              <Text style={{ color: "#42526E", fontSize: 18 }}>A/c type</Text>
              <Text
                style={{
                  color: "#42526E",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginVertical: 10,
                }}
              >
                Individual
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text style={{ color: "#42526E", fontSize: 18 }}>
                Recipient’s a/c number
              </Text>
              <Text
                style={{
                  color: "#42526E",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginVertical: 10,
                }}
              >
                1239814293832
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text style={{ color: "#42526E", fontSize: 18 }}>
                Recipient’s name
              </Text>
              <Text
                style={{
                  color: "#42526E",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginVertical: 10,
                }}
              >
                Kevin Moses
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <Text style={{ color: "#42526E", fontSize: 18 }}>
                Transfer amount
              </Text>
              <Text
                style={{
                  color: "#42526E",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginVertical: 10,
                }}
              >
                $300.00
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          flex: 1,
          marginBottom: 30,
          width: "80%",
          alignSelf: "center",
          alignContent: "center",
          width: "90%",
          marginTop: "40%",
        }}
      >
        <View
          style={{
            width: "60%",
            justifyContent: "center",
            alignContent: "center",
            alignSelf: "center",
          }}
        >
          <Picker
            selectedValue={currency}
            style={{ fontSize: 24 }}
            onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}
          >
            <Picker.Item label="Select Account" enabled={false} />
            <Picker.Item label="Primary a/c 8476" value="dollar" />
          </Picker>
        </View>
        <Action
          onPress={() => {
            navigation.navigate("receipt");
          }}
          fill={true}
        >
          Pay
        </Action>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  imgContainer: {
    alignItems: "center",
    marginBottom: "25@s",
  },
  img: {
    height: "40@s",
    width: "40@s",
    borderRadius: 100,
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

export default ConfirmScreen;

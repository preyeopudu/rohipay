import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Image,
} from "react-native";
import Navheader from "./NavHeader";
import Action from "./Action";
import { ScaledSheet } from "react-native-size-matters";
import CurrencyInput from "react-native-currency-input";
import { Picker } from "@react-native-picker/picker";
import { ToWords } from "to-words";
const toWords = new ToWords({
  localeCode: "en-US",
  converterOptions: {
    currency: true,
    ignoreDecimal: false,
    ignoreZeroCurrency: true,
    doNotAddOnly: false,
  },
});
import { useNavigation } from "@react-navigation/core";

const Pay = () => {
  const [value, setValue] = useState(0);
  const [words, setWords] = useState("zero");
  const [currency, setCurrency] = useState();
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      style={{ height: "100%" }}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Navheader />
        <View style={{ alignItems: "center", flex: 1 }}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={require("../assets/images/avatar.png")}
            />
          </View>
          <Text
            style={{
              color: "#42526E",
              fontWeight: "bold",
              fontSize: 18,
              fontFamily: "Inter",
            }}
          >
            Kevin Moses
          </Text>
          <Text
            style={{
              color: "#7A869A",
              fontSize: 18,
              fontFamily: "Inter",
              marginTop: 10,
            }}
          >
            kevin.moses@outlook.com
          </Text>

          <View style={{ marginTop: "20%" }}>
            <Text
              style={{
                color: "#7A869A",
                fontSize: 16,
                fontFamily: "Inter",
                textAlign: "center",
                marginBottom: 15,
              }}
            >
              You are paying
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <CurrencyInput
                prefix="$"
                placeholder="amount"
                value={value}
                delimiter=","
                separator="."
                precision={2}
                onChangeValue={setValue}
                style={{
                  fontFamily: "Inter",
                  fontWeight: "bold",
                  fontSize: 30,
                  textAlign: "center",
                  width: "100%",
                }}
                onChangeText={(formattedValue) => {
                  if (value == null) {
                    setWords(toWords.convert(0));
                  } else {
                    setWords(toWords.convert(value));
                  }
                }}
              />
            </View>
            <Text
              style={{
                color: "#7A869A",
                fontSize: 14,
                fontFamily: "Inter",
                marginTop: 10,
                textAlign: "center",
              }}
            >
              {words}
            </Text>
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
    </TouchableWithoutFeedback>
  );
};

const styles = ScaledSheet.create({
  imgContainer: {
    alignItems: "center",
    marginBottom: "25@s",
    borderRadius: 100,
  },
  img: {
    height: "35@s",
    width: "35@s",
  },
});

export default Pay;

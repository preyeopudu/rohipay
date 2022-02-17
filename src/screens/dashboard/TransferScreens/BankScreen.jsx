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
} from "react-native";
import Navheader from "../../../components/NavHeader";
import { ScaledSheet } from "react-native-size-matters";
import Action from "../../../components/Action";
import { useNavigation } from "@react-navigation/core";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

const BankScreen = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  return (
    <ScrollView
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <Navheader />
      <Text
        style={{
          fontFamily: "Inter",
          color: "#42526E",
          fontSize: 20,
          marginHorizontal: 40,
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        Enter recipient’s bank account details.
      </Text>
      <TouchableWithoutFeedback
        style={{ height: "100%" }}
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <View
          style={{
            alignItems: "center",
            width: "100%",
            flex: 1,
          }}
        >
          <View style={[styles.inputContainer, { paddingVertical: 1 }]}>
            <Picker
              selectedValue={gender}
              onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
              style={{ marginHorizontal: 10 }}
            >
              <Picker.Item label="Account Type" enabled={false} />
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Rather not say" value="Rather not say" />
            </Picker>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Amount to transfer"
              style={styles.input}
              onChangeText={(val) => setPhone(val)}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Full name of the recipient"
              style={styles.input}
              onChangeText={(val) => setPhone(val)}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Recipient’s a/c number"
              style={styles.input}
              onChangeText={(val) => setPhone(val)}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Re-enter recipient’s a/c number"
              style={styles.input}
              onChangeText={(val) => setPhone(val)}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-end",
              flex: 1,
              marginBottom: 30,
              width: "80%",
            }}
          >
            <Action
              onPress={() => {
                navigation.navigate("confirm");
              }}
              fill={true}
            >
              Verify and pay
            </Action>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  inputContainer: {
    backgroundColor: "#FAFBFC",
    borderWidth: 1,
    borderColor: "#DFE1E6",
    width: "300@s",
    paddingVertical: 10,
    marginVertical: 20,
  },
  input: {
    fontSize: "14@s",
    marginLeft: 10,
  },
});

export default BankScreen;

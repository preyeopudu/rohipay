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
import { ScaledSheet } from "react-native-size-matters";
import Action from "../../../components/Action";
import { useNavigation } from "@react-navigation/native";
import Navheader from "../../../components/NavHeader";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";

const PersonalDetails = (props) => {
  const { navigate } = useNavigation();
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState();
  const [currency, setCurrency] = useState();
  const [source, setSource] = useState();
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
            <Text style={styles.heading}>Just a few more details...</Text>
          </View>

          <ScrollView
            style={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.pinContainer}>
              <View
                style={[
                  styles.inputContainer,
                  { flex: 1, marginHorizontal: 5 },
                ]}
              >
                <TextInput placeholder="First name" style={styles.input} />
              </View>
              <View
                style={[
                  styles.inputContainer,
                  { flex: 1, marginHorizontal: 5 },
                ]}
              >
                <TextInput
                  placeholder="Last name"
                  keyboardType="numeric"
                  style={styles.input}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Birth date"
                style={styles.input}
                secureTextEntry={show}
              />

              <View style={styles.inputIcon}>
                <TouchableOpacity>
                  <Ionicons
                    name="calendar-outline"
                    size={25}
                    color="#7A869A"
                    activeOpacity={0.5}
                    onPress={() => SetShow(!show)}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.pinContainer}>
              <View style={[{ flex: 1 }, styles.pin]}>
                <Picker
                  selectedValue={language}
                  onValueChange={(itemValue, itemIndex) =>
                    setLanguage(itemValue)
                  }
                >
                  <Picker.Item label="Language" enabled={false} />
                  <Picker.Item label="english" value="english" />
                  <Picker.Item label="french" value="french" />
                </Picker>
              </View>
              <View style={[{ flex: 1 }, styles.pin]}>
                <Picker
                  selectedValue={currency}
                  onValueChange={(itemValue, itemIndex) =>
                    setCurrency(itemValue)
                  }
                >
                  <Picker.Item label="Currency" enabled={false} />
                  <Picker.Item label="dollar" value="dollar" />
                  <Picker.Item label="naira" value="naira" />
                </Picker>
              </View>
            </View>
            <View style={[{ flex: 1, marginTop: 20 }, styles.pin]}>
              <Picker
                selectedValue={source}
                onValueChange={(itemValue, itemIndex) => setSource(itemValue)}
              >
                <Picker.Item label="Source of funds / wealth" enabled={false} />
                <Picker.Item label="english" value="english" />
                <Picker.Item label="french" value="french" />
              </Picker>
            </View>
            <View
              style={[{ flex: 1, marginHorizontal: 5, marginTop: 20 }]}
            ></View>
            <View style={styles.pinContainer}>
              <View
                style={[
                  styles.inputContainer,
                  { flex: 1, marginHorizontal: 5 },
                ]}
              >
                <TextInput placeholder="Street" style={styles.input} />
              </View>
              <View
                style={[
                  styles.inputContainer,
                  { flex: 1, marginHorizontal: 5 },
                ]}
              >
                <TextInput placeholder="Building" style={styles.input} />
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
                  placeholder="Region (optional)"
                  style={styles.input}
                />
              </View>
              <View
                style={[
                  styles.inputContainer,
                  { flex: 1, marginHorizontal: 5 },
                ]}
              >
                <TextInput placeholder="Town/City" style={styles.input} />
              </View>
            </View>
            <View style={styles.pinContainer}>
              <View
                style={[
                  styles.inputContainer,
                  { flex: 1, marginHorizontal: 5 },
                ]}
              >
                <TextInput placeholder="Postal code" style={styles.input} />
              </View>
            </View>
          </ScrollView>

          <View style={styles.bottomContainer}>
            <Action
              fill={true}
              onPress={() => {
                navigate("SuccessPersonal");
              }}
            >
              Finish!
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
    fontSize: "19@s",
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

export default PersonalDetails;

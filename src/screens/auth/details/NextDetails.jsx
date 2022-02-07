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
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import MaskInput, { Masks } from "react-native-mask-input";
import { useSelector } from "react-redux";
import { CREATEMERCHANT, CREATEPERSONAL } from "../../../api/account-api";
import { Loading } from "../../../components/Loading";
import DatePicker from "react-native-datepicker";

const NextDetails = ({ route }) => {
  const { navigate } = useNavigation();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [street, setStreet] = useState("");
  const [building, setBuilding] = useState("");
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [postal, setPostal] = useState("");
  const [date, setDate] = useState("");
  const [currency, setCurrency] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState(route.params.email);
  const [password, setPassword] = useState(route.params.password);
  const [username, setUsername] = useState(route.params.username);
  const [business, setBuisness] = useState(route.params.business);
  const [buisnessType, setBusinessType] = useState(route.params.buisnessType);
  const [country, setCountry] = useState(route.params.country);
  const [loading, setLoading] = useState(false);

  const token = useSelector((s) => s.TokenReducer);

  if (loading) {
    return <Loading />;
  }

  const handleSubmit = async () => {
    console.log(date);
    if (
      firstName === "" ||
      lastName === "" ||
      street === "" ||
      building === "" ||
      town == "" ||
      postal == "" ||
      date == "" ||
      currency == "" ||
      mobile == "" ||
      state == ""
    ) {
      Alert.alert("Error!!!", "Kindly complete your details");
    } else {
      if (route.params.type == "Merchant") {
        setLoading(true);
        let data = {
          businesstype: buisnessType,
          companyname: business,
          firstname: firstName,
          industry: buisnessType,
          lastname: lastName,
          location: {
            city: town,
            country: country,
            street: street,
          },
          mobile: mobile,
        };
        const CreateMerchant = await CREATEMERCHANT(data, token);
        setLoading(false);
        console.log(CreateMerchant);
        if (CreateMerchant.err) {
          setLoading(false);
          Alert.alert("Error", CreateMerchant.err);
        } else {
          setLoading(false);
          console.log(1);
          navigate("SuccessPersonal", { account: route.params.type });
        }
      } else if (route.params.type == "Personal") {
        setLoading(true);
        let data = {
          bvn: "",
          customerAddress: [
            {
              city: town,
              country: country,
              postalCode: postal,
              state: state,
              status: "",
              street: street,
            },
          ],
          dateOfBirth: date,
          email: email,
          firstName: firstName,
          gender: route.params.gender,
          identity: [
            {
              countryOfIssue: "",
              idNumber: "",
              idType: "",
              status: "",
            },
          ],
          lastName: lastName,
          localGovernment: "",
          nationality: "",
          otherNames: "",
          phone: 0,
          salutation: "",
          status: "Active",
          type: "Personal",
        };
        const CreatePersonal = await CREATEPERSONAL(data, token);
        setLoading(false);
        console.log(CreatePersonal);
        if (CreatePersonal.err) {
          setLoading(false);
          Alert.alert("Error", CreatePersonal.err);
        } else {
          setLoading(false);
          console.log(1);
          navigate("SuccessPersonal", { account: route.params.type });
        }
      } else if (route.params.type == "Business") {
      }
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
                <TextInput
                  placeholder="First name"
                  onChangeText={(val) => {
                    setFirstName(val);
                  }}
                  style={styles.input}
                />
              </View>
              <View
                style={[
                  styles.inputContainer,
                  { flex: 1, marginHorizontal: 5 },
                ]}
              >
                <TextInput
                  placeholder="Last name"
                  style={styles.input}
                  onChangeText={(val) => {
                    setLastName(val);
                  }}
                />
              </View>
            </View>
            <View>
              <DatePicker
                style={{
                  width: "100%",
                  backgroundColor: "#FAFBFC",
                  borderWidth: 1,
                  borderColor: "#DFE1E6",
                  paddingHorizontal: 20,
                }}
                date={date}
                mode="date"
                placeholder="select date"
                format="DD/MM/YYYY"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateInput: {
                    borderColor: "#fff",
                    alignItems: "flex-start",
                    backgroundColor: "#FAFBFC",
                  },
                  placeholderText: {
                    fontSize: 17,
                    color: "gray",
                  },
                  dateText: {
                    fontSize: 17,
                  },
                }}
                onDateChange={(date) => {
                  setDate(date);
                }}
              />
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
                <TextInput
                  placeholder="Street"
                  style={styles.input}
                  onChangeText={(val) => {
                    setStreet(val);
                  }}
                />
              </View>
              <View
                style={[
                  styles.inputContainer,
                  { flex: 1, marginHorizontal: 5 },
                ]}
              >
                <TextInput
                  placeholder="Building"
                  style={styles.input}
                  onChangeText={(val) => {
                    setBuilding(val);
                  }}
                />
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
                  placeholder="State"
                  style={styles.input}
                  onChangeText={(val) => {
                    setState(val);
                  }}
                />
              </View>
              <View
                style={[
                  styles.inputContainer,
                  { flex: 1, marginHorizontal: 5 },
                ]}
              >
                <TextInput
                  placeholder="Town/City"
                  style={styles.input}
                  onChangeText={(val) => {
                    setTown(val);
                  }}
                />
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
                  placeholder="Postal code"
                  style={styles.input}
                  onChangeText={(val) => {
                    setPostal(val);
                  }}
                />
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
                  placeholder="Mobile number"
                  style={styles.input}
                  onChangeText={(val) => {
                    setMobile(val);
                  }}
                />
              </View>
              <View style={[{ flex: 1 }, styles.pin]}>
                <Picker
                  selectedValue={currency}
                  onValueChange={(itemValue, itemIndex) =>
                    setCurrency(itemValue)
                  }
                >
                  <Picker.Item label="Currency" enabled={false} />
                  <Picker.Item label="Dollars" value="Dollars" />
                  <Picker.Item label="Euro" value="Euro" />
                  <Picker.Item label="Pound" value="Pound" />
                </Picker>
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
              Create Profilee!
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
    fontSize: "16@s",
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

export default NextDetails;

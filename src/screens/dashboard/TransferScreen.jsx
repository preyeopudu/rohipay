import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { Picker } from "@react-native-picker/picker";
import SendSection from "../../sections/Transfer/sendSection";
import ContactSection from "../../sections/Transfer/contactSection";

const TransferScreen = () => {
  const navigation = useNavigation();
  const [currency, setCurrency] = useState();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          marginTop: StatusBar.currentHeight + 20,
          flexDirection: "row",
          marginHorizontal: 15,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="arrowleft" size={28} color="#42526E" />
        </TouchableOpacity>

        <Text
          style={{
            fontWeight: "500",
            fontSize: 20,
            marginHorizontal: 20,
            color: "#42526E",
          }}
        >
          Transfer
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 15,
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#7A869A", fontSize: 20 }}>Pay from</Text>
        <View style={{ width: "60%", marginHorizontal: 5 }}>
          <Picker
            selectedValue={currency}
            style={{ fontSize: 24 }}
            onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}
          >
            <Picker.Item label="Account" enabled={false} />
            <Picker.Item label="Primary a/c 8476" value="dollar" />
          </Picker>
        </View>
      </View>

      <View>
        <SendSection />
        <ContactSection />
      </View>
    </View>
  );
};

export default TransferScreen;

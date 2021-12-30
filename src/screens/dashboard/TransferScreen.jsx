import React, { useState } from "react";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { Button, Menu, Divider, Provider } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

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
        <View style={{ width: 150 }}>
          <Picker
            selectedValue={currency}
            onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}
          >
            <Picker.Item label="Currency" enabled={false} />
            <Picker.Item label="dollar" value="dollar" />
            <Picker.Item label="naira" value="naira" />
          </Picker>
        </View>
      </View>
    </View>
  );
};

export default TransferScreen;

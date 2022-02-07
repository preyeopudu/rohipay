import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  Octicons,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const SendSection = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: 15,
        backgroundColor: "#FAFBFC",
        borderColor: "#DFE1E6",
        borderWidth: 1,
        marginHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      ></View>
      <View style={{ marginHorizontal: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 20,
          }}
        >
          <TouchableOpacity style={styles.navcontainer}>
            <AntDesign name="qrcode" size={27} color="#2C4389" />
            <Text style={styles.navtext}>Scan & Pay</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navcontainer}
            onPress={() => navigation.navigate("transfer")}
          >
            <MaterialCommunityIcons
              name="email-send"
              size={27}
              color="#2C4389"
            />
            <Text style={styles.navtext}>To Email</Text>
          </TouchableOpacity>

          <View style={styles.navcontainer}>
            <MaterialIcons name="send-to-mobile" size={24} color="#2C4389" />
            <Text style={styles.navtext}>To Mobile</Text>
          </View>
          <View style={styles.navcontainer}>
            <MaterialCommunityIcons
              name="bank-outline"
              size={27}
              color="#2C4389"
            />
            <Text style={styles.navtext}>To Bank</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navcontainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  navtext: {
    color: "#42526E",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
});

export default SendSection;

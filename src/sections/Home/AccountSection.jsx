import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const AccountSection = () => {
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
      >
        <View style={{ flex: 2, marginHorizontal: 15 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "#282D35" }}>
            Dollars Account
          </Text>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            justifyContent: "space-evenly",
            marginRight: 15,
          }}
        >
          <Text style={{ color: "#7A869A", marginHorizontal: 8 }}>
            All accounts
          </Text>
          <AntDesign name="arrowright" size={24} color="#7A869A" />
        </TouchableOpacity>
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <Text
          style={{
            color: "#2C4389",
            fontSize: 28,
            fontWeight: "bold",
            marginTop: 10,
            marginBottom: 5,
          }}
        >
          $32,539
        </Text>
        <Text style={{ color: "#7A869A" }}>Curremt balance</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 20,
          }}
        >
          <TouchableOpacity style={styles.navcontainer}>
            <Octicons name="diff-added" size={25} color="#2C4389" />
            <Text style={styles.navtext}>Add money</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navcontainer}
            onPress={() => navigation.navigate("transfer")}
          >
            <Ionicons name="send" size={25} color="#2C4389" />
            <Text style={styles.navtext}>Send Money</Text>
          </TouchableOpacity>

          <View style={styles.navcontainer}>
            <Ionicons name="ios-share-outline" size={25} color="#2C4389" />
            <Text style={styles.navtext}>Transfer</Text>
          </View>
          <View style={styles.navcontainer}>
            <MaterialCommunityIcons
              name="file-download-outline"
              size={25}
              color="#2C4389"
            />
            <Text style={styles.navtext}>Statement</Text>
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
    fontSize: 13,
    textAlign: "center",
    marginTop: 10,
  },
});

export default AccountSection;

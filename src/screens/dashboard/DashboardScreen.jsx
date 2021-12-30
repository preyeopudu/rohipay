import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import AccountSection from "../../sections/Home/AccountSection";
import TransferSection from "../../sections/Home/TransferSection";
import TransactionSection from "../../sections/Home/TransactionSection";

const DashboardScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 55,
          marginBottom: 25,
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={require("../../assets/images/icon.png")}
            style={{ height: 40, width: 40, marginHorizontal: 15 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            flex: 1,
            alignItems: "center",
          }}
        >
          <Feather name="bell" size={30} color="#42526E" />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <Image
              source={require("../../assets/images/avatar.png")}
              style={{
                borderRadius: 30,
                height: 40,
                width: 40,
                marginHorizontal: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <AccountSection />
      <TransferSection />
      <TransactionSection />
    </View>
  );
};

export default DashboardScreen;

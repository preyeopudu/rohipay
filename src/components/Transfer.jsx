import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const Transfer = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginHorizontal: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/images/avatar.png")}
        style={{ height: 50, width: 50, borderRadius: 100 }}
      />
      <Text style={{ color: "#42526E", textAlign: "center", marginTop: 10 }}>
        {props.name}
      </Text>
    </View>
  );
};

export default Transfer;

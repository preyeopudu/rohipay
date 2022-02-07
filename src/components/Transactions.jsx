import React from "react";
import { View, Text } from "react-native";

const Transaction = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginHorizontal: 10,
        marginVertical: 5,
        marginVertical: 10,
        elevation: 1,
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              color: "#282D35",
              marginRight: 5,
              alignItems: "center",
            }}
          >
            From :
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#282D35" }}>
            {props.name}
          </Text>
        </View>

        <Text style={{ color: "#7A869A" }}>{props.amount}</Text>
      </View>

      <Text style={{ marginTop: 5 }}>{props.time}</Text>
    </View>
  );
};

export default Transaction;

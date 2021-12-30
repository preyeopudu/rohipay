import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import Transfer from "../../components/Transfer";
import Transaction from "../../components/Transactions";

const name = [
  { name: "dave", time: "22:43", amount: "+$110.000" },
  { name: "richard", time: "22:43", amount: "+$110.000" },
  { name: "kim", time: "22:43", amount: "+$110.000" },
  { name: "sam", time: "22:43", amount: "+$110.000" },
  { name: "desmond", time: "22:43", amount: "+$110.000" },
  { name: "ebi", time: "22:43", amount: "+$110.000" },
  { name: "preye", time: "22:43", amount: "+$110.000" },
  { name: "dan", time: "22:43", amount: "+$110.000" },
];

const TransactionSection = () => {
  const renderItem = ({ item }) => (
    <Transaction
      name={item.name}
      time={item.time}
      amount={item.amount}
      id={item.name}
    />
  );
  return (
    <View
      style={{
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: "#DFE1E6",
        paddingVertical: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: "#282D35",
            marginLeft: 15,
          }}
        >
          Recent Transactions
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#7A869A" }}>View all</Text>
          <AntDesign
            style={{ marginHorizontal: 10 }}
            name="arrowright"
            size={24}
            color="#7A869A"
          />
        </TouchableOpacity>
      </View>

      <View style={{ marginHorizontal: 15 }}>
        <Text style={{ marginTop: 15, color: "#7A869A", fontSize: 15 }}>
          Today
        </Text>
      </View>

      <FlatList
        nestedScrollEnabled
        style={{ marginTop: 20, height: 150 }}
        alwaysBounceVertical={true}
        showsHorizontalScrollIndicator={false}
        data={name}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TransactionSection;

import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import Transfer from "../../components/Transfer";

const name = [
  { name: "dave", id: 1 },
  { name: "richard", id: 2 },
  { name: "kim", id: 3 },
  { name: "sam", id: 4 },
];

const TransferSection = ({ item }) => {
  const renderItem = ({ item }) => <Transfer name={item.name} id={item.id} />;
  return (
    <View
      style={{
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: "#DFE1E6",
        marginVertical: 25,
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
          Quick Transfers
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#7A869A" }}>Recents</Text>
          <AntDesign
            style={{ marginHorizontal: 10 }}
            name="arrowright"
            size={24}
            color="#7A869A"
          />
        </TouchableOpacity>
      </View>

      <FlatList
        nestedScrollEnabled
        style={{ marginTop: 20 }}
        horizontal={true}
        alwaysBounceVertical={true}
        showsHorizontalScrollIndicator={false}
        data={name}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TransferSection;

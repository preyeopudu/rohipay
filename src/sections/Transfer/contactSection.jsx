import React from "react";
import { View, Text, FlatList, Image } from "react-native";

const name = [
  { name: "dave", id: 1 },
  { name: "richard", id: 2 },
  { name: "kim", id: 3 },
  { name: "sam", id: 4 },
  { name: "dave", id: 5 },
  { name: "richard", id: 6 },
  { name: "kim", id: 7 },
];

const Contact = (props) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        alignItems: "center",
        marginHorizontal: "5%",
        marginVertical: 5,
      }}
    >
      <Image
        source={require("../../assets/images/avatar.png")}
        style={{ height: 50, width: 50, borderRadius: 100 }}
      />
      <Text style={{ color: "#42526E", textAlign: "center", marginTop: 10 }}>
        {props.name}
      </Text>
    </View>
  );
};

const ContactSection = () => {
  const renderItem = ({ item }) => (
    <Contact
      name={item.name}
      time={item.time}
      amount={item.amount}
      id={item.name}
    />
  );
  return (
    <View
      style={{
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: "#DFE1E6",
        paddingVertical: 20,
        marginHorizontal: 15,
        marginVertical: 30,
      }}
    >
      <Text>Your Contacts</Text>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignSelf: "center",
          width: "100%",
        }}
      >
        <FlatList
          nestedScrollEnabled
          style={{ marginTop: 20 }}
          alwaysBounceVertical={true}
          showsHorizontalScrollIndicator={false}
          data={name}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={4}
        />
      </View>
    </View>
  );
};

export default ContactSection;

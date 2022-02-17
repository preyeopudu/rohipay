import React from "react";
import { View, TextInput, Keyboard, Text, StatusBar } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Navheader = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white" }}>
      <View
        style={{
          width: "88%",
          alignSelf: "center",
          flexDirection: "row",
          marginTop: 60,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} color="#42526E" />
        </TouchableOpacity>

        <View style={{ marginHorizontal: 15 }}>
          <Text style={{ fontSize: 19, fontFamily: "Inter", color: "#4D4351" }}>
            {props.title}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
  },
  iconContainer: {
    paddingLeft: 10,
    marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  icon: {
    marginLeft: "5@s",
    backgroundColor: "#fff",
    color: "#220917",
    fontSize: 35,
  },
  topText: {
    backgroundColor: "#fff",
    flex: 5,
    fontSize: 23,
    fontFamily: "Inter",
    textAlign: "center",
  },
});

export default Navheader;

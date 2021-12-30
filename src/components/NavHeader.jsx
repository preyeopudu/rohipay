import React from "react";
import { View, TextInput, Keyboard, Text, StatusBar } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Ionicons";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/core";
import { AntDesign } from "@expo/vector-icons";

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
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <AntDesign
            name="arrowleft"
            size={30}
            color="#42526E"
            onPress={() => navigation.goBack()}
          />
        </View>

        <View>
          <Text style={{ fontSize: 22, fontFamily: "Inter", color: "#4D4351" }}>
            {props.title}
          </Text>
        </View>

        <View>
          {props.next ? (
            <Icon
              size={35}
              color="#4D4351"
              name="ios-chevron-forward"
              onPress={() => navigation.navigate(props.next)}
            />
          ) : null}
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

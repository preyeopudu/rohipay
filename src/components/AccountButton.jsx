import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const AccountButton = (props) => {
  const [pressed, setPressed] = useState(true);

  return (
    <TouchableOpacity
      onPress={() => {
        setPressed(false);
        props.onPress();
        setTimeout(() => {
          setPressed(true);
        }, 1000);
      }}
      activeOpacity={0.6}
    >
      <View
        style={[
          styles.buttonContainer,
          pressed
            ? { backgroundColor: "rgba(44, 67, 137, 0.08);" }
            : { backgroundColor: "#2C4389" },
        ]}
      >
        <View style={{ marginVertical: 10, marginHorizontal: 25 }}>
          <Text
            style={[
              styles.buttonHeader,
              pressed ? { color: "#42526E" } : { color: "#fff" },
            ]}
          >
            {props.heading}
          </Text>
          <Text
            style={[
              styles.buttonSubHeading,
              pressed ? { color: "#42526E" } : { color: "#fff" },
            ]}
          >
            {props.subheading}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AccountButton;

const styles = ScaledSheet.create({
  buttonContainer: {
    width: "300@s",
    borderColor: "#2C4389",
    borderWidth: 1.5,
    marginVertical: 15,
  },
  buttonHeader: {
    fontFamily: "Inter",
    fontSize: "18@s",
    color: "#42526E",
    fontWeight: "bold",
  },
  buttonSubHeading: {
    fontFamily: "Inter",
    fontSize: "13@s",
    marginTop: 10,
  },
});

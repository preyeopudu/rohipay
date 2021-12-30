import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScaledSheet } from "react-native-size-matters";
import React from "react";

const Action = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onPress}
      style={[
        styles.actionContainer,
        props.fill
          ? { backgroundColor: "#2C4389" }
          : { backgroundColor: "#fff", borderColor: "#2C4389", borderWidth: 1 },
      ]}
    >
      <View style={styles.actionBody}>
        <Text
          style={[
            props.fill ? { color: "white" } : { color: "#2C4389" },
            styles.actionText,
          ]}
        >
          {props.children}
        </Text>
        {props.icon}
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  actionContainer: {
    marginVertical: "10@s",
    textAlign: "center",
  },
  actionText: {
    fontSize: "12@s",
    textAlign: "center",
    fontFamily: "Inter",
    marginRight: 5,
    fontWeight: "bold",
  },
  actionBody: {
    paddingVertical: "10@s",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Action;

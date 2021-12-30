import React from "react";
import { View, Text, Image } from "react-native";
import { scale, ScaledSheet } from "react-native-size-matters";
import Action from "../../components/Action";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
      }}
    >
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/images/mobile.png")}
        />
      </View>

      <View style={{ marginTop: scale(50) }}>
        <Text style={styles.heading}>Safe and secure payment service</Text>
        <Text style={styles.subheading}>
          Freedom to make secure online payments worldwide without worrying
          about your security and privacy.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Action
          onPress={() => navigation.navigate("Account")}
          fill={true}
          icon={<AntDesign name="arrowright" size={24} color="white" />}
        >
          Create a free account
        </Action>

        <Action onPress={() => navigation.navigate("Login")}>Login</Action>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  imgContainer: {
    alignItems: "center",
    height: "268@s",
    width: "343@s",
  },
  img: {
    height: "268@s",
    width: "343@s",
  },
  heading: {
    fontFamily: "Inter",
    fontWeight: "bold",
    fontSize: "22@s",
    color: "#42526E",
  },
  subheading: {
    fontWeight: "normal",
    color: "#42526E",
    fontSize: "13@s",
    fontFamily: "Inter",
    marginTop: "10@s",
  },
  buttonContainer: {
    marginVertical: "40@s",
  },
});

export default HomeScreen;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  TextInput,
  Keyboard,
  Image,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/core";
import Action from "../../../components/Action";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const Receipt = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginTop: 60 }}>
        <View
          style={{ alignItems: "flex-end", alignSelf: "center", width: "85%" }}
        >
          <Entypo name="share" size={35} color="#2C4389" />
        </View>

        <View style={[styles.imgContainer]}>
          <Image
            style={styles.img}
            source={require("../../../assets/images/icon.png")}
          />
        </View>

        <Text
          style={{
            textAlign: "center",
            fontFamily: "Inter",
            color: "#42526E",
            fontSize: 18,
            letterSpacing: 4,
          }}
        >
          PAYMENT RECEIPT
        </Text>
      </View>

      <View style={{backgroundColor:'#FAFBFC',borderWidth:1,alignSelf:'center',marginTop:20,width:"85%",borderColor:'#FAFBFC'}}>
        <Text
          style={{
            color: "#42526E",
            fontFamily: "Inter",
            fontSize: 18,
            marginVertical:5,
            textAlign: "center",
          }}
        >
          Payment Sucessful
        </Text>
        <Text
          style={{
            color: "#42526E",
            fontFamily: "Inter",
            fontSize: 30,
            textAlign: "center",
            fontWeight: "bold",
            letterSpacing: 4,
          }}
        >
          $300.00
        </Text>

        <View >

        <View>
        <View
          style={{
            borderBottomColor: '#DFE1E6',
            borderBottomWidth: 1,
            width:'95%',
            color:"#DFE1E6",
            alignSelf:'center',
            marginVertical:40
          }}
        />
          <View style={{flexDirection:'row',justifyContent:'space-between',}}>
            <Text style={{color:'#42526E',fontSize:18}}>To: Kevin Moses</Text>
            <Image
              styles={styles.img}
              source={require("../../../assets/images/avatar.png")}
            />
          </View>
          <Text style={{color:'#42526E',fontSize:18,fontWeight:'bold',marginVertical:10}} >From: Primary a/c 8476</Text>
        </View>
  <View
          style={{
            borderBottomColor: '#DFE1E6',
            borderBottomWidth: 1,
            width:'95%',
            color:"#DFE1E6",
            alignSelf:'center',
            marginVertical:20
          }}
        />
        <View>
          <Text style={{color:'#42526E',fontSize:16,fontFamily:'Inter',fontWeight:'bold'}}>Transaction ID: 20211111 45546844621</Text>
          <Text style={{color:'#42526E',fontSize:16,fontFamily:'Inter',marginVertical:10}}>14 Nov 2021, 12:35 PM</Text>
        </View>
      </View>
      </View>

      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          flex: 1,
          marginBottom: 30,
          width: "80%",
          alignSelf: "center",
          alignContent: "center",
          width: "90%",
          marginTop:"40%"
        }}
      >
        <Action
          onPress={() => {
            navigation.navigate("transfer");
          }}
          fill={true}
        >
          Close
        </Action>
      </View>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  imgContainer: {
    alignItems: "center",
    marginBottom: "25@s",
  },
  img: {
    height: "40@s",
    width: "40@s",
    borderRadius: 100,
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
  inputContainer: {
    backgroundColor: "#FAFBFC",
    borderWidth: 1,
    borderColor: "#DFE1E6",
    width: "300@s",
    paddingVertical: 10,
    marginVertical: 12,
  },
  input: {
    fontSize: "14@s",
    width: "156@s",
    marginLeft: 30,
  },
  forgotContainer: {
    alignItems: "flex-end",
    width: "300@s",
    marginTop: 15,
    fontSize: "14@s",
    fontFamily: "Inter",
    color: "#42526E",
  },
  bottomContainer: {
    width: "300@s",
    justifyContent: "flex-end",
    marginBottom: 36,
    flex: 1,
  },
});

export default Receipt;

import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "./../../Utils/Colors";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "./../../../hookes/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  };
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 80,
      }}
    >
      {/*<Image source = {require('./../../../assets/images/icon.png')}
      style={styles.bgImage}
      /> */}
      <Image
        source={require("./../../../assets/images/logo.png")}
        style={styles.logoImage}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.heading}>
          Your personality guide for Saint-Petesburg
        </Text>
        <Text style={styles.desc}>
          Find a suitable city landmark for yourself
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 17,
            }}
          >
            Login with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoImage: {
    width: 300,
    height: 250,
    objectFit: "contain",
  },
  /* bgImage:{
    width:250,
    height:200,
    marginTop:20,
    objectFit:'cover'
  }, */
  heading: {
    fontSize: 25,
    fontFamily: "outfit-bold",
    textAlign: "center",
    marginTop: 20,
  },
  desc: {
    fontSize: 27,
    fontFamily: "outfit",
    textAlign: "center",
    marginTop: 15,
    color: Colors.BLACK,
  },
  button: {
    backgroundColor: Colors.WHITEBLUE,
    padding: 16,
    display: "flex",
    borderRadius: 99,
    marginTop: 40,
  },
});

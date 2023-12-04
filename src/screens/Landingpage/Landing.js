import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LandingPage = () => {
  const navigation = useNavigation();

  const onPressLogin = () => {
    navigation.navigate("Login"); // Assuming "LogIn" is the correct route name
  };

  const onPressSignup = () => {
    navigation.navigate("Register");
  };


  return (
    <ImageBackground
      source={require("../../../assets/images/landing_newBckgrnd.jpg")} // Replace with your image source
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to National Beverage Corp.</Text>

        {/* LogIn Button */}
        <TouchableOpacity style={styles.button} onPress={onPressLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Signup Button */}
        <TouchableOpacity style={styles.button} onPress={onPressSignup}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.emptySpace} /> {/* Adds empty space */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end", // Aligns content at the bottom
  },
  container: {
    backgroundColor: "rgba(248, 241, 230, 0.6)", // Your background color with opacity
    paddingHorizontal: 20,
    paddingBottom: 50, // Adjust this value to control the space between button and bottom
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A2F18", // Your text color
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#D4A55D", // Your button color
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A2F18", // Your button text color
  },
});

export default LandingPage;

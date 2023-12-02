import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/Buttons/Button";
import Logo from "../../../assets/images/logo.png";

const Home = () => {
  const navigation = useNavigation();

  const { height } = useWindowDimensions();

  const onPressSignOut = () => {
    navigation.navigate("Login");
  };

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <Image
        style={[styles.logo, { height: height * 0.3 }]}
        source={Logo}
        resizeMode="contain"
      />
      <Button text="Sign Out" type="TERTIARY" onPress={onPressSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#daa520",
  },

  title: {
    fontSize: 30,
    fontWeight: "300",
    
  },

  logo: {
    width: "70%",
    maxWidth: 300,
    height: 100,
  },
});

export default Home;
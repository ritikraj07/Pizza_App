import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  title: string;
};
const Navbar: React.FC<Props> = ({ title = "Pizza App" }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/Pizza.gif")} />
      <Text style={styles.text}>{title}</Text>
      <AntDesign name="search1" size={24} color="white" style={styles.search} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60, 
    paddingHorizontal: 16,
    width:"100%"
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white", 
    fontStyle: "italic",
  },
  image: {
    width: 50,
    height: 50, 
  },
  search: {},
});

export default Navbar;

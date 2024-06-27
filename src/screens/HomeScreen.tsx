import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import PizzaItem from "../components/PizzaItem";
import pizzasData from "../constants/pizzaData";
import { RootStackParamList } from "../navigation/AppNavigator";
import Navbar from "../components/Navbar";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Navbar title="Pizza App" />

      <FlatList
        data={pizzasData}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <PizzaItem
            {...item}
            onPress={() => navigation.navigate("Details", { pizza: item })}
          />
        )}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    backgroundColor: "#F0DB4F",
    width: "100%",
    paddingVertical: 10,
  },
  bannerText: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  flatListContent: {
    padding: 10,
  },
});

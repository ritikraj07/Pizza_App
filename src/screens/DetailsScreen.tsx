import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { addItem } from "../store/cartSlice";
import Navbar from "../components/Navbar";

type PizzaItemDetailsProps = {
  route: RouteProp<RootStackParamList, "Details">;
  navigation: StackNavigationProp<RootStackParamList, "Details">;
};

type PizzaProps = {
  id: number;
  name: string;
  size: string;
  price: number;
  category: string;
  image: string;
};

const PizzaItemDetails: React.FC<PizzaItemDetailsProps> = ({
  route,
  navigation,
}) => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const { pizza } = route.params as { pizza: PizzaProps };

  const handleAddToCart = () => {
    if (cart.find((item: any) => item.id === pizza.id)) {
      Alert.alert("Item already in cart", "Please remove item from cart");
      return;
    }
    dispatch(
      addItem({
        id: pizza.id,
        name: pizza.name,
        price: pizza.price,
        image: pizza.image,
        size: pizza.size,
        category: pizza.category,
        quantity: 1,
      })
    );
  };

  const handleOrderNow = () => {
    Alert.alert("Coming Soon", "This feature is coming soon!");
  };

  return (
    <View style={{ flex: 1 }}>
      <Navbar title="Pizza Details" />
      <View style={styles.container}>
        <Image source={{ uri: pizza.image }} style={styles.image} />
        <Text style={styles.name}>{pizza.name}</Text>
        <Text style={styles.details}>Size: {pizza.size}</Text>
        <Text style={styles.details}>Price: ${pizza.price}</Text>
        <Text style={styles.details}>Category: {pizza.category}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.remove} onPress={handleAddToCart}>
            <FontAwesome name="cart-plus" size={24} color="black" />
            <Text>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOrderNow} style={styles.buy}>
            <MaterialIcons
              name="shopping-cart-checkout"
              size={24}
              color="black"
            />
            <Text>Buy</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.backBtm}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  details: {
    fontSize: 18,
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  remove: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 0, 0, 0.2)",
    padding: 5,
    borderRadius: 5,
    color: "white",
    width: "48%",
    justifyContent: "space-around",
  },
  buy: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(25, 100, 100, 0.2)",
    padding: 5,
    borderRadius: 5,
    color: "white",
    width: "48%",
    justifyContent: "space-around",
  },
  backBtm: {
    position: "absolute",
    bottom: 30,
    left: 25,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 50,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default PizzaItemDetails;

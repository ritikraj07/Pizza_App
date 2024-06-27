import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../store/cartSlice"; // Update path to your cartSlice file
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

interface PizzaItemProps {
  id: number;
  name: string;
  size: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
}

const CartItem: React.FC<PizzaItemProps> = (props) => {
  const dispatch = useDispatch();
  const { id, name, size, price, category, image, quantity } = props;

  const handleIncrease = () => {
    dispatch(
      increaseQuantity({ id, name, size, price, category, image, quantity })
    );
  };

  const handleDecrease = () => {
    dispatch(
      decreaseQuantity({ id, name, size, price, category, image, quantity })
    );
  };

  const handleRemove = () => {
    dispatch(removeItem({ id, name, size, price, category, image, quantity }));
  };

  const handleOrderNow = () => {
    Alert.alert("Coming Soon", "This feature is coming soon!");
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>
          {size} - ${price.toFixed(2)}
        </Text>
        <Text style={styles.category}>{category}</Text>
        <View style={styles.quantity}>
          <TouchableOpacity disabled={quantity === 1} onPress={handleDecrease}>
            <AntDesign
              name="minussquare"
              size={24}
              color={quantity == 1 ? "gray" : "black"}
            />
          </TouchableOpacity>
          <Text style={{ marginHorizontal: 10 }}>{quantity}</Text>
          <TouchableOpacity onPress={handleIncrease}>
            <AntDesign name="plussquare" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.remove} onPress={handleRemove}>
          <MaterialIcons name="remove-shopping-cart" size={24} color="black" />
          <Text>Remove</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleOrderNow} style={styles.buy}>
        <MaterialIcons name="shopping-cart-checkout" size={24} color="black" />
        <Text>Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 3,
    flex: 1,
    maxWidth: "95%",
    position: "relative",
  },
  image: {
    width: "30%",
    height: 150,
  },
  infoContainer: {
    padding: 10,
    width: "70%",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  details: {
    fontSize: 16,
    color: "#777",
    marginVertical: 2,
  },
  category: {
    fontSize: 14,
    color: "green",
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  remove: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    backgroundColor: "rgba(255, 0, 0, 0.2)",
    padding: 5,
    borderRadius: 5,
    color: "white",
    width: "40%",
  },
  buy: {
    position: "absolute",
    bottom: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(25, 100, 100, 0.2)",
    padding: 5,
    borderRadius: 5,
    color: "white",
  },
});

export default CartItem;

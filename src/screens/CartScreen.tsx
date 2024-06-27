import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";
import { RootStackParamList } from "../navigation/AppNavigator";
import { RootState } from "../store/store";

type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, "Cart">;

type Props = {
  navigation: CartScreenNavigationProp;
};

const CartScreen: React.FC<Props> = ({ navigation }) => {
  const cartItems = useSelector((state: RootState) => state.cart);

  return (
    <View style={styles.container}>
      <Navbar title="Cart" />
      <FlatList
        data={cartItems || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CartItem {...item} />}
      />
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});

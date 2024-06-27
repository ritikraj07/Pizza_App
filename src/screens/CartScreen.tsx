import React from "react";
import { View, Button, FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CartItem from "../components/CartItem";
import Navbar from "../components/Navbar";

type CartScreenNavigationProp = StackNavigationProp<RootStackParamList, "Cart">;

type Props = {
  navigation: CartScreenNavigationProp;
};

const CartScreen: React.FC<Props> = ({ navigation }) => {
  const cartItems = useSelector((state: RootState) => state.cart);

  return (
    <View>
      <Navbar title="Your Cart" />
      <FlatList
        data={cartItems || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartItem {...item}/>
        )}
      />
    </View>
  );
};

export default CartScreen;

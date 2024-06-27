import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from Expo
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";

import { SafeAreaView, useColorScheme } from "react-native";
import CartScreen from "../screens/CartScreen";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import useAsyncStorage from "../hooks/useAsyncStorage";
import { useDispatch } from "react-redux";
import { setItems } from "../store/cartSlice";
import { StatusBar } from "expo-status-bar";


export interface PizzaProps {
  id: number;
  name: string;
  size: string;
  price: number;
  category: string;
  image: string;
  quantity: number;
}

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  BottomTab: undefined;
  Details: { pizza: PizzaProps };
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "red",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Cart") {
            iconName = "cart";
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={focused ? "red" : color}
            />
          );
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

const StackScreen = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="BottomTab" component={BottomTab} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const { setItem, getItem, removeItem } = useAsyncStorage();
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === "dark";

  const containerStyle = {
    backgroundColor: isDarkMode ? "black" : "white",
    flex: 1,
    color: isDarkMode ? "white" : "black",
    paddingTop: 30,
  };
  useEffect(() => {
    getItem("cartItems").then((res) => dispatch(setItems(res)));
  }, []);

  useEffect(() => {
    setItem("cartItems", cart);
    return () => {
      setItem("cartItems", cart);
    };
  }, [cart]);

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" backgroundColor="red"  />
      <SafeAreaView style={containerStyle}>
        <NavigationContainer>
          <StackScreen />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppNavigator;

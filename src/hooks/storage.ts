// import { useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useDispatch } from "react-redux";
// import { setItems } from "../store/cartSlice";
// import { Pizza } from "../constants/pizzaData";
// import { useSelector } from "react-redux";

// const useAsyncStorage = () => {
//   const dispatch = useDispatch();
//   const cartStroe = useSelector((state: any) => state.cart);

//   useEffect(() => {
//     let cartItems: any = getItem("cartItems");

//     if (cartItems) {
//       dispatch(setItems(JSON.parse(cartItems)));
//     }
//     return () => {
//       removeItem("cartItems");
//       setItem("cartItems", cartStroe);
//     };
//   }, []);

//   const setItem = async (key: string, value: Pizza) => {
//     try {
//       await AsyncStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const getItem = async (key: string) => {
//     try {
//       const value = await AsyncStorage.getItem(key);
//       if (value !== null) {
//         return value;
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const removeItem = async (key: string) => {
//     try {
//       await AsyncStorage.removeItem(key);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return { setItem, getItem, removeItem };
// };
// import { useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const useAsyncStorage = <T>(key: string, initialValue: T) => {
//   const [storedValue, setStoredValue] = useState<T>(initialValue);

//   console.log(storedValue);

//   useEffect(() => {
//     const loadStoredValue = async () => {
//       try {
//         const value = await AsyncStorage.getItem(key);
//         if (value !== null) {
//           setStoredValue(JSON.parse(value));
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     loadStoredValue();
//   }, [key]);

//   const setValue = async (value: T) => {
//     try {
//       setStoredValue(value);
//       await AsyncStorage.setItem(key, JSON.stringify(value));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return [storedValue, setValue] as const;
// };

// export default useAsyncStorage;

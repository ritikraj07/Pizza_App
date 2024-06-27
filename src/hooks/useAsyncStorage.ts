import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pizza } from "../constants/pizzaData";

const useAsyncStorage = () => {
  const setItem = async (key: string, value: Pizza[]) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  const getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return JSON.parse(value);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  };

  return { setItem, getItem, removeItem };
};

export default useAsyncStorage;

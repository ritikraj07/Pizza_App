import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface PizzaItemProps {
  id: number;
  name: string;
  size: string;
  price: number;
  category: string;
  image: string;
  onPress: () => void;
}

const PizzaItem: React.FC<PizzaItemProps> = ({
  name,
  size,
  price,
  category,
  image,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>
          {size} - ${price.toFixed(2)}
        </Text>
        <Text style={styles.category}>{category}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 3,
    flex: 1,
    maxWidth: "48%",
  },
  image: {
    width: "100%",
    height: 150,
  },
  infoContainer: {
    padding: 10,
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
    color: "#aaa",
  },
});

export default PizzaItem;

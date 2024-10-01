import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DetailsScreen = ({ route }) => {
  // Extract the car data passed from the HomeScreen
  const { car } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: car.image }} style={styles.carImage} />
      <Text style={styles.carName}>{car.car_name}</Text>
      <Text style={styles.carPrice}>₹{car.price.toLocaleString()}</Text>
      {/* Add other details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  carImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  carName: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  carPrice: {
    fontSize: 20,
    color: "orangered",
    fontWeight: "bold",
  },
});

export default DetailsScreen;

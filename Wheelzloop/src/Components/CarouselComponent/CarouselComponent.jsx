import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { width: screenWidth } = Dimensions.get("window");

const CarouselComponent = () => {
  const imageUrl =
    "https://cdn.pixabay.com/photo/2015/10/01/19/05/car-967470_640.png"; // Replace with your actual image URL

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>Drive Your Dreams</Text>
        <Text style={styles.subtitle}>
          Find the perfect car that fits your lifestyle.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#f4f4f4",
  },
  card: {
    width: screenWidth * 0.85,
    backgroundColor: "#4fc1c6",
    borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});

export default CarouselComponent;

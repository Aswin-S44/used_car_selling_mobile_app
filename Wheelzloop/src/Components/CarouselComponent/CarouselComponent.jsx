import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const CarouselComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-black-super-car-png-image_11921537.png",
        }}
        style={styles.carImage}
      />
      <Text style={styles.bannerText}>Best of Cars</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f78535",
    width: "100%",
    height: 120,
    borderRadius: 20,
    alignItems: "center",
    padding: 20,
    position: "relative",
    overflow: "hidden",
  },
  bannerText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "500",
    position: "absolute",
    top: 20,
    left: 20,
  },
  carImage: {
    width: "100%",
    height: 130,
    borderRadius: 10,
    position: "absolute",
    top: 0,
    left: 40,
  },
});

export default CarouselComponent;

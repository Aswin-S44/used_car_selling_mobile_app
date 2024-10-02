import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const favoriteCars = [
  {
    _id: "66ebf9010a0a8cc02345c84d",
    car_name: "Lexus",
    brand: "Lexus",
    model: "330i M Sport",
    year: "2020",
    kilometer: 1000,
    varient: "BMW X3",
    owner: "First",
    claim: true,
    major_accident: false,
    shop_name: "Test Auto Sales",
    loan_available: true,
    dealer: "BMW Authorized Dealer",
    about:
      "Well-maintained BMW 330i M Sport in excellent condition. Comes with a full-service history and all original parts. The car offers a blend of performance and luxury with its powerful engine and advanced features.",
    image:
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740735/cloudinary_react/1726740732287.jpg",
    additional_images: [
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740735/cloudinary_react/1726740735670_additional.jpg",
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740736/cloudinary_react/1726740736473_additional.jpg",
    ],
    sold: false,
    price: 4500000,
    color: "Red",
    under_warrenty: "true",
    fuelType: "Petrol",
    location: "Kottayam",
    transmission_type: "Manual",
    registration: "2021",
    insurance: "2026",
    rto: "Kanjirappally",
    engine: "1 Litre",
    createdAt: "2024-09-19T10:12:17.194Z",
    updatedAt: "2024-09-19T10:12:17.194Z",
    __v: 0,
  },
];

const FavouritesScreen = () => {
  const [favorites, setFavorites] = useState(favoriteCars);

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((car) => car.id !== id));
  };

  const renderFavoriteCar = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45Sce8fEKukPRwyWHxnVAQ9XndzuGBz6-1Q&s",
        }}
        style={styles.carImage}
      />
      <View style={styles.carDetails}>
        <Text style={styles.carModel}>{item.model}</Text>

        <Ionicons name="trash-outline" size={17} color="orangered" />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Favorites</Text>
      <FlatList
        data={favorites}
        renderItem={renderFavoriteCar}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  carImage: {
    width: 100,
    height: "auto",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#f78535",
    marginRight: 15,
  },
  carDetails: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  carModel: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  removeButton: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavouritesScreen;

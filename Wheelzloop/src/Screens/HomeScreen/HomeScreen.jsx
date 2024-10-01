import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { LinearGradient } from "expo-linear-gradient";
import CarouselComponent from "../../Components/CarouselComponent/CarouselComponent";

const { width } = Dimensions.get("window");

const CAR_DATA = [
  {
    _id: "66ebf9010a0a8cc02345c84d",
    car_name: "Lexus",
    image:
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740735/cloudinary_react/1726740732287.jpg",
    price: 4500000,
  },
  {
    _id: "66ebf86ffe42a97a69b8d2de",
    car_name: "BMW M4",
    image:
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740588/cloudinary_react/1726740588298.jpg",
    price: 4500000,
  },
  // ...other car data
];

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  // Get the navigation object
  const navigation = useNavigation();

  // Function to render each car item
  const renderCarItem = ({ item }) => (
    <TouchableOpacity
      style={styles.carCard}
      onPress={() => navigation.navigate("Details", { car: item })} // Navigate to Details screen and pass car data
    >
      <Image source={{ uri: item.image }} style={styles.carImage} />
      <Text style={styles.carName}>{item.car_name}</Text>
      <Text style={styles.carPrice}>₹{item.price.toLocaleString()}</Text>
    </TouchableOpacity>
  );

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        <Text style={styles.wheelText}>Wheel</Text>
        <Text style={styles.loopText}>Loop</Text>
      </Text>
      <CarouselComponent />
      <View style={styles.contentContainer}>
        <View style={styles.tabContainer}>
          {["All", "Sedan", "Hatchback"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                selectedTab === tab ? styles.activeTab : null,
              ]}
              onPress={() => handleTabPress(tab)}
            >
              <Text style={styles.tabText}>{tab}</Text>
            </TouchableOpacity>
          ))}
          <Text style={styles.viewAllText}>View All</Text>
        </View>
        <FlatList
          data={CAR_DATA}
          renderItem={renderCarItem}
          keyExtractor={(item) => item._id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.carListContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
  },
  contentContainer: {
    flex: 1, // Make sure this takes up the remaining space
  },
  mainText: {
    textAlign: "left",
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "600",
    flexDirection: "row",
  },
  wheelText: {
    color: "black",
  },
  loopText: {
    color: "orangered",
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  tab: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#f8f8f8",
    marginRight: 10,
    elevation: 2,
  },
  activeTab: {
    backgroundColor: "orangered",
    color: "#fff",
  },
  tabText: {
    color: "#000",
    fontWeight: "600",
  },
  viewAllText: {
    color: "#ff6347",
    fontWeight: "600",
    marginLeft: "auto",
  },
  slider: {
    marginVertical: 10,
  },
  banner: {
    width: width * 0.8,
    height: 200,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  bannerImage: {
    position: "absolute",
    top: 10,
    left: 10,
    width: "100%",
    height: 100,
  },
  bannerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 80,
  },
  carCard: {
    width: width * 0.4,
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#f8f8f8",
    padding: 10,
    elevation: 2,
  },
  carImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  carName: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 5,
  },
  carPrice: {
    color: "#ff6347",
    fontWeight: "bold",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  carListContainer: {
    paddingBottom: 20, // Add some padding at the bottom if necessary
  },
});

export default HomeScreen;

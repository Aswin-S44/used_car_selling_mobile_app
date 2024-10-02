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
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import CarouselComponent from "../../Components/CarouselComponent/CarouselComponent";

const { width } = Dimensions.get("window");

const CAR_DATA = [
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
  {
    _id: "66ebf86ffe42a97a69b8d2de",
    car_name: "BMW M4",
    brand: "BMW",
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
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740588/cloudinary_react/1726740588298.jpg",
    additional_images: [
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740589/cloudinary_react/1726740589152_additional.jpg",
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740589/cloudinary_react/1726740589757_additional.jpg",
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740590/cloudinary_react/1726740590325_additional.jpg",
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740590/cloudinary_react/1726740590848_additional.jpg",
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
    createdAt: "2024-09-19T10:09:51.477Z",
    updatedAt: "2024-09-19T10:09:51.477Z",
    __v: 0,
  },
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
  {
    _id: "66ebf86ffe42a97a69b8d2de",
    car_name: "BMW M4",
    brand: "BMW",
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
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740588/cloudinary_react/1726740588298.jpg",
    additional_images: [
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740589/cloudinary_react/1726740589152_additional.jpg",
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740589/cloudinary_react/1726740589757_additional.jpg",
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740590/cloudinary_react/1726740590325_additional.jpg",
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740590/cloudinary_react/1726740590848_additional.jpg",
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
    createdAt: "2024-09-19T10:09:51.477Z",
    updatedAt: "2024-09-19T10:09:51.477Z",
    __v: 0,
  },
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
  {
    _id: "66ebf86ffe42a97a69b8d2de",
    car_name: "BMW M4",
    brand: "BMW",
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
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740588/cloudinary_react/1726740588298.jpg",
    additional_images: [
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740589/cloudinary_react/1726740589152_additional.jpg",
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740589/cloudinary_react/1726740589757_additional.jpg",
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740590/cloudinary_react/1726740590325_additional.jpg",
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740590/cloudinary_react/1726740590848_additional.jpg",
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
    createdAt: "2024-09-19T10:09:51.477Z",
    updatedAt: "2024-09-19T10:09:51.477Z",
    __v: 0,
  },
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
  {
    _id: "66ebf86ffe42a97a69b8d2de",
    car_name: "BMW M4",
    brand: "BMW",
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
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740588/cloudinary_react/1726740588298.jpg",
    additional_images: [
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740589/cloudinary_react/1726740589152_additional.jpg",
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740589/cloudinary_react/1726740589757_additional.jpg",
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740590/cloudinary_react/1726740590325_additional.jpg",
      "http://res.cloudinary.com/personalprojectaswins/image/upload/v1726740590/cloudinary_react/1726740590848_additional.jpg",
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
    createdAt: "2024-09-19T10:09:51.477Z",
    updatedAt: "2024-09-19T10:09:51.477Z",
    __v: 0,
  },
];

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const navigation = useNavigation();

  const renderCarItem = ({ item }) => (
    <TouchableOpacity
      style={styles.carCard}
      onPress={() => navigation.navigate("Details", { car: item })}
    >
      {/* <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45Sce8fEKukPRwyWHxnVAQ9XndzuGBz6-1Q&s",
        }}
        style={styles.carImage}
      /> */}
      <Image
        style={styles.carImage}
        // source={{
        //   uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45Sce8fEKukPRwyWHxnVAQ9XndzuGBz6-1Q&s",
        // }}
        source={{
          uri: item?.image,
        }}
      />
      <Text style={styles.carName}>{item.car_name}</Text>
      <Text style={styles.carPrice}>₹{item.price.toLocaleString()}</Text>
      <Text style={{ color: "#7e746d" }}>
        {item?.kilometer} km | {item?.fuelType} | {item?.location}
      </Text>
    </TouchableOpacity>
  );

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        <Text style={styles.wheelText}>Wheelz</Text>
        <Text style={styles.loopText}>Loop</Text>
      </Text>
      <Text style={styles.mainHeading}>Find your perfect car</Text>
      <Text style={styles.subHeading}>
        Discover the most trusted marketplace for buying cars
      </Text>
      <CarouselComponent />
      <View style={styles.tabContainer}>
        {["All", "Sedan", "Hatchback"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, selectedTab === tab ? styles.activeTab : null]}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  mainText: {
    textAlign: "left",
    fontSize: 30,
    marginBottom: 10,
    fontWeight: "600",
    flexDirection: "row",
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: "400",
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
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
    marginTop: 30,
    // top: 17,
    // position: "relative",
  },
  tab: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#f8f8f8",
    marginRight: 10,
    elevation: 2,
  },
  activeTab: {
    backgroundColor: "#f96a0a",
    color: "#fff",
    minWidth: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
  carCard: {
    width: width * 0.4,
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#f8f8f8",
    padding: 10,
    elevation: 2,
    // marginTop: 10,
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
    paddingBottom: 20,
  },
});

export default HomeScreen;

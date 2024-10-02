import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";

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

const RECENT_SEARCHES = ["BMW", "Audi", "Lexus", "Mercedes", "Sedan"];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTab, setSelectedTab] = useState("Recent Searches");
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  const renderCarItem = ({ item }) => (
    <View style={styles.carCard}>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45Sce8fEKukPRwyWHxnVAQ9XndzuGBz6-1Q&s",
        }}
        style={styles.carImage}
      />
      <View style={styles.carDetails}>
        <Text style={styles.carName}>{item.car_name}</Text>
        <Text style={styles.carPrice}>₹{item.price.toLocaleString()}</Text>
        <Text style={{ color: "#7e746d" }}>
          {item?.kilometer} km | {item?.fuelType} | {item?.location}
        </Text>
      </View>
    </View>
  );

  const renderRecentSearch = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.recentSearchItem,
        selectedTab === item ? styles.activeRecentSearch : null,
      ]}
      onPress={() => setSelectedTab(item)}
    >
      <Text style={styles.recentSearchText}>{item}</Text>
    </TouchableOpacity>
  );

  const openFilterModal = () => {
    setFilterModalVisible(true);
  };

  const closeFilterModal = () => {
    setFilterModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="gray" />
        <TextInput
          placeholder="Search for cars..."
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity onPress={openFilterModal} style={styles.filterButton}>
          <Ionicons name="filter" size={24} color="#ff6347" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={RECENT_SEARCHES}
        renderItem={renderRecentSearch}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.recentSearchList}
      />

      <FlatList
        data={CAR_DATA}
        renderItem={renderCarItem}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        style={styles.carList}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={filterModalVisible}
        onRequestClose={closeFilterModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.filterModal}>
            <Text style={styles.modalTitle}>Filter Options</Text>

            <View style={styles.filterOption}>
              <Text style={styles.filterOptionLabel}>Sort By</Text>
              <TouchableOpacity>
                <Text style={styles.filterOptionItem}>Latest</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.filterOptionItem}>Oldest</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.filterOptionItem}>Price: Low to High</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.filterOptionItem}>Price: High to Low</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.filterOption}>
              <Text style={styles.filterOptionLabel}>Select Brand</Text>
              <TouchableOpacity>
                <Text style={styles.filterOptionItem}>BMW</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.filterOptionItem}>Audi</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.filterOptionItem}>Lexus</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.resetButton}
                onPress={closeFilterModal}
              >
                <Text style={styles.resetText}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={closeFilterModal}
              >
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  filterButton: {
    marginLeft: 10,
  },
  recentSearchList: {
    marginBottom: 20,
  },
  recentSearchItem: {
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 20,
    marginRight: 10,
    height: 46,
  },
  activeRecentSearch: {
    backgroundColor: "#ff6347",
  },
  recentSearchText: {
    fontSize: 14,
    color: "#333",
  },
  carList: {
    paddingBottom: 10,
  },
  carCard: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    elevation: 2,
  },
  carImage: {
    width: width * 0.4,
    height: "auto",
    borderRadius: 10,
  },
  carDetails: {
    flex: 1,
    paddingLeft: 10,
  },
  carName: {
    fontSize: 16,
    fontWeight: "600",
  },
  carPrice: {
    color: "#ff6347",
    fontWeight: "bold",
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  filterModal: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  filterOption: {
    marginVertical: 10,
  },
  filterOptionLabel: {
    fontSize: 16,
    fontWeight: "600",
  },
  filterOptionItem: {
    fontSize: 14,
    color: "#333",
    marginVertical: 5,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  resetButton: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  resetText: {
    color: "#333",
  },
  applyButton: {
    backgroundColor: "#ff6347",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  applyText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default SearchScreen;

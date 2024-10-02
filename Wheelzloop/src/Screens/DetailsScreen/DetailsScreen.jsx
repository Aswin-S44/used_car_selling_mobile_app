import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
} from "react-native";
import { FontAwesome5, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper"; // Updated import
import Feather from "@expo/vector-icons/Feather";

const DetailsScreen = ({ route }) => {
  const { car } = route.params;
  const [mainImage, setMainImage] = useState(car.image);
  const [modalVisible, setModalVisible] = useState(false);
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [enableWhatsApp, setEnableWhatsApp] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Feather name="bookmark" size={24} color="black" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: mainImage }} style={styles.carImage} />

        <View style={styles.additionalImagesContainer}>
          {car?.additional_images.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => setMainImage(image)}>
              <Image source={{ uri: image }} style={styles.additionalImage} />
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.carName}>{car?.car_name}</Text>
        <Text style={styles.carPrice}>₹{car?.price.toLocaleString()}</Text>

        <View style={styles.detailRow}>
          <Ionicons name="calendar-outline" size={20} color="gray" />
          <Text style={styles.detailText}>
            Year: {car.year ? car.year : "Unavailable"}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <FontAwesome5 name="road" size={20} color="gray" />
          <Text style={styles.detailText}>
            Kilometers: {car.kilometer ? car.kilometer : "_"} km
          </Text>
        </View>

        <View style={styles.detailRow}>
          <MaterialIcons name="local-gas-station" size={20} color="gray" />
          <Text style={styles.detailText}>
            Fuel Type: {car.fuelType ? car.fuelType : "_"}
          </Text>
        </View>

        <View style={styles.detailRow}>
          <MaterialIcons name="location-on" size={20} color="gray" />
          <Text style={styles.detailText}>
            Location: {car.location ? car.location : "_"}
          </Text>
        </View>

        <Text style={styles.about}>{car?.about}</Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.sellerButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Get Seller Details</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Contact Seller</Text>

            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={fullName}
              onChangeText={setFullName}
            />
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              value={mobileNumber}
              keyboardType="phone-pad"
              onChangeText={setMobileNumber}
            />

            <View style={styles.checkboxContainer}>
              <Checkbox
                status={enableWhatsApp ? "checked" : "unchecked"}
                onPress={() => setEnableWhatsApp(!enableWhatsApp)}
              />
              <Text style={styles.checkboxLabel}>Enable WhatsApp Message</Text>
            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => {
                // Handle form submission here
                setModalVisible(false);
              }}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeModalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginBottom: 15,
  },
  additionalImagesContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  additionalImage: {
    width: 100,
    height: 60,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#f3cbb0",
  },
  carName: {
    fontSize: 28,
    fontWeight: "600",
    marginVertical: 10,
  },
  carPrice: {
    fontSize: 22,
    color: "orangered",
    fontWeight: "bold",
    marginBottom: 15,
  },
  about: {
    color: "#535f5f",
    fontFamily: "Poppins-Light",
    marginTop: 15,
    lineHeight: 18,
    fontSize: 14,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  detailText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  sellerButton: {
    backgroundColor: "orangered",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: "orangered",
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  closeModalButton: {
    marginTop: 10,
    paddingVertical: 8,
    width: "100%",
    alignItems: "center",
  },
  closeModalText: {
    color: "orangered",
    fontSize: 16,
  },
});

export default DetailsScreen;

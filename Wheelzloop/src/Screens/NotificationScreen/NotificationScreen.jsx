import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const notifications = [
  { id: "1", message: "New car added: Tesla Model S", time: "10:30 AM" },
  { id: "2", message: "New car added: BMW M3", time: "11:00 AM" },
  { id: "3", message: "New car added: Audi Q5", time: "12:15 PM" },
  { id: "4", message: "New car added: Mercedes-Benz C-Class", time: "1:45 PM" },
];

const NotificationScreen = () => {
  const renderNotification = ({ item }) => (
    <TouchableOpacity style={styles.notificationCard}>
      <Ionicons
        name="notifications-outline"
        size={24}
        color="#f78535"
        style={styles.icon}
      />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationText}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 20,
    marginTop: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  notificationCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
  },
  icon: {
    marginRight: 10,
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    fontSize: 16,
    color: "#333",
  },
  notificationTime: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
});

export default NotificationScreen;

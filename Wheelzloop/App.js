import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Entypo, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import HomeScreen from "./src/Screens/HomeScreen/HomeScreen";
import DetailsScreen from "./src/Screens/DetailsScreen/DetailsScreen";
import SearchScreen from "./src/Screens/SearchScreen/SearchScreen";
import NotificationScreen from "./src/Screens/NotificationScreen/NotificationScreen";
import FavouritesScreen from "./src/Screens/FavouritesScreen/FavouritesScreen";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// Define a Stack Navigator for Home and Details screens
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: "Car Details" }}
      />
    </Stack.Navigator>
  );
}

// Define your Tab Navigator
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{ backgroundColor: "#ffff" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack} // Use HomeStack instead of HomeScreen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Entypo
              name="home"
              size={focused ? 26 : 20}
              color={focused ? "#f78535" : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome
              name="search"
              size={focused ? 26 : 20}
              color={focused ? "#f78535" : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name="notifications"
              size={focused ? 26 : 20}
              color={focused ? "#f78535" : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: ({ focused, color }) => (
            <AntDesign
              name="hearto"
              size={focused ? 26 : 20}
              color={focused ? "#f78535" : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={true}
      />
      <MyTabs />
    </NavigationContainer>
  );
}

import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screen/HomeScreen/HomeScreen";
import FavoriteScreen from "../Screen/FavoriteScreen/FavoriteScreen";
import ProfileScreen from "../Screen/ProfileScreen/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import Colors from "../Utils/Colors";

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Search",
          tabBarActiveTintColor: Colors.GREEN,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="favorite"
        component={FavoriteScreen}
        options={{
          tabBarLabel: "Favorite",
          tabBarActiveTintColor: Colors.GREEN,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarActiveTintColor: Colors.GREEN,
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

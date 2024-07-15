import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Colors from "@/Apps/Utils/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({ searchedLocation }) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: 15,
        paddingHorizontal: 5,
        backgroundColor: Colors.TURQUOISE,
        borderRadius: 6,
      }}
    >
      <Ionicons
        name="location-sharp"
        size={24}
        color={Colors.BLUE}
        style={{ paddingTop: 10 }}
      />
      <GooglePlacesAutocomplete
        placeholder="Search for attractions"
        fetchDetails={true}
        onPress={(data, details = null) => {
          searchedLocation(details?.geometry?.location);
        }}
        query={{
          key: "YOUR API KEY",
          language: "en",
        }}
      />
    </View>
  );
}

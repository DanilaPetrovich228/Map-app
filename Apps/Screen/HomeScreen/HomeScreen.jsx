import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import AppMapView from "./AppMapView";
import Header from "./Header";
import SearchBar from "./SearchBar";
import { UserLocationContext } from "@/Apps/Context/UserLocationContext";
import GlobalApi from "./../../Utils/GlobalApi";
import PlaceListView from "./PlaceListView";
import { SelectionMarkerContext } from "./../../Context/SelectMarkerContext";

export default function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext);
  const [placeList, setPlaceList] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState([]);
  useEffect(() => {
    location && GetNearByPlace();
  }, [location]);

  const GetNearByPlace = () => {
    const data = {
      includedTypes: ["museum", "performing_arts_theater", "art_gallery"],
      maxResultCount: 10,
      locationRestriction: {
        circle: {
          center: {
            latitude: location?.latitude,
            longitude: location?.longitude,
          },
          radius: 5000.0,
        },
      },
    };
    GlobalApi.NewNearByPlace(data).then((resp) => {
      //console.log(JSON.stringify(resp.data))
      setPlaceList(resp.data?.places);
    });
  };
  return (
    <SelectionMarkerContext.Provider
      value={{ selectedMarker, setSelectedMarker }}
    >
      <View>
        <View style={styles.headerContainer}>
          <Header />
          <SearchBar
            searchedLocation={(location) =>
              setLocation({ latitude: location.lat, longitude: location.lng })
            }
          />
        </View>
        {placeList && <AppMapView placeList={placeList} />}
        <View style={styles.placeListContainer}>
          {placeList && <PlaceListView placeList={placeList} />}
        </View>
      </View>
    </SelectionMarkerContext.Provider>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 10,
    width: "100%",
    paddingHorizontal: 20,
  },
  placeListContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 10,
    width: "100%",
  },
});

import React, { useRef, useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import mapStyle from "../assets/data/mapStyle";
import * as Location from "expo-location";
import { calculateDistance } from "./utilities/utils";

interface LocationData {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const Explore: React.FC = () => {
  const router = useRouter();
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 41.8301,
    longitude: -71.5151,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const markerRegion: LocationData = {
    latitude: 41.8301,
    longitude: -71.4151,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [text, setText] = useState("Waiting...");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  useEffect(() => {
    goToLocation(region);
  }, [region]);

  if (errorMsg) {
    setText(errorMsg);
  }

  const goToMarker = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    setText(`Marker is ${calculateDistance(region, markerRegion)} meters away`);
    mapRef.current.animateToRegion(markerRegion, 1000);
  };

  const goToLocation = (data: LocationData) => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(data, 3 * 1000);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#25459F" },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              text="Back"
              dimension="60%"
              handlePress={() => {
                router.back();
              }}
            />
          ),
          headerTitle: "",
        }}
      />
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={region}
          //   onRegionChangeComplete={(region) => setRegion(region)}
          customMapStyle={mapStyle}
        >
          <Marker coordinate={region} pinColor="green" />
          <Marker
            coordinate={markerRegion}
            image={require("../assets/img/chestMarker_128.png")}
          />
        </MapView>
        <Button onPress={() => goToMarker()} title="Go to Marker" />
        <Text style={styles.text}>{text}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 20,
    backgroundColor: "lightblue",
  },
});

export default Explore;

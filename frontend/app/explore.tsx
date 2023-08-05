import React, { useRef, useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  Button,
  Modal,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import mapStyle from "../assets/data/mapStyle";
import * as Location from "expo-location";
import { calculateDistance, isUserCloseEnough } from "./utilities/utils";
import { LocationData } from "../constants/interfaces";
import AppModal from "../components/common/AppModal";
import QuestMarker from "../components/markers/QuestMarker";
import NavBar from "../components/common/NavBar";
import demoQuests from "../assets/data/demoQuests";

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
  const [modalVisible, setModalVisible] = useState(false);

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
    setText(
      `${
        isUserCloseEnough(region, markerRegion)
          ? "Reward Aquired"
          : "Please get closer to aquire the reward"
      }`
    );
    setModalVisible(true);
    mapRef.current.animateToRegion(markerRegion, 1000);
  };

  const goToLocation = (data: LocationData) => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(data, 3 * 1000);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#F7F6FE", paddingTop: 32 }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <AppModal
        visible={modalVisible}
        onVisibleChange={(newValue: boolean) => setModalVisible(newValue)}
        dismissChildren={() => {}}
      />
      <View style={styles.container}>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={region}
          //   onRegionChangeComplete={(region) => setRegion(region)}
          customMapStyle={mapStyle}
        >
          <Marker coordinate={region} pinColor="green">
            <Callout>
              <Text>Stinky Dinky here's the Callout Winky</Text>
            </Callout>
          </Marker>
          <Marker
            coordinate={markerRegion}
            image={require("../assets/img/chestMarker_128.png")}
            onPress={(e) => {
              goToLocation({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              });
            }}
          />
          {demoQuests.map((quest, ix) => {
            return <QuestMarker key={ix} quest={quest} mapRef={mapRef} />;
          })}
        </MapView>
        <Button onPress={() => goToMarker()} title="Go to Marker" />
        <Text style={styles.text}>{text}</Text>
      </View>
      <NavBar />
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
    marginBottom: 96,
  },
});

export default Explore;

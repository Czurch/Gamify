import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { LocationData } from "../../constants/interfaces";

interface QuestMarkerProps {
  locationData: LocationData;
  mapRef: React.RefObject<MapView>;
}

const QuestMarker: React.FC<QuestMarkerProps> = ({ locationData, mapRef }) => {
  const goToLocation = (data: LocationData) => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(data, 500);
  };
  return (
    <Marker
      coordinate={locationData}
      image={require("../../assets/img/chestMarker_128.png")}
      onPress={(e) => {
        goToLocation({
          latitude: e.nativeEvent.coordinate.latitude,
          longitude: e.nativeEvent.coordinate.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }}
      calloutAnchor={{ x: 2.0, y: 0.0 }}
    >
      <Callout style={styles.callout}>
        <Text>THIS IS WHERE I WOULD PUT A CALLOUT. IF I HAD ONE.</Text>
      </Callout>
    </Marker>
  );
};

export default QuestMarker;

const styles = StyleSheet.create({
  callout: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 256, //4rem = 4 * 16 = 64
    height: 192,
    backgroundColor: "lightgrey",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

import React from "react";
import { Shadow } from "react-native-shadow-2";
import { View } from "react-native";

const DividerLine = () => {
  return (
    <View style={{ padding: 16 }}>
      <Shadow distance={3}>
        <View style={{ height: 2, width: "100%", borderRadius: 0.9 }} />
      </Shadow>
    </View>
  );
};

export default DividerLine;

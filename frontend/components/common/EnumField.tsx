import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import NumberWheelPicker from "./NumberWheelPicker";
import { ItemType } from "react-native-wheel-picker-expo/lib/typescript/types";
import WheelPickerExpo from "react-native-wheel-picker-expo";

interface EnumFieldProps {
  value: string;
  setValue: (value: any) => void;
  items: ItemType[];
  dismissFocus: boolean;
}

const EnumField: React.FC<EnumFieldProps> = ({
  value,
  setValue,
  items,
  dismissFocus,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setIsFocused(false);
  }, [dismissFocus]);
  return (
    <View>
      <Pressable onPressIn={() => setIsFocused(true)}>
        <View style={styles.container}>
          <Text style={styles.text}>{value}</Text>
          {isFocused && (
            <View style={styles.wheelContainer}>
              <WheelPickerExpo
                onChange={(v) => {
                  setValue(v);
                }}
                items={items}
                height={150}
              />
            </View>
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default EnumField;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#F7F6FE",
    padding: 8,
    minWidth: 160,
    borderRadius: 12,
  },
  text: {
    fontSize: 18,
  },
  wheelContainer: {
    transform: [{ translateY: -35.5 }],
  },
  outPress: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#DDDDDD",
  },
});

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

interface InputFieldProps {
  value: string;
  setValue: (value: any) => void;
  dismissFocus: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  setValue,
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
              <NumberWheelPicker
                minValue={1}
                maxValue={10}
                onSetValue={(v) => {
                  setValue(v);
                }}
                height={150}
              />
            </View>
          )}
        </View>
      </Pressable>
    </View>
  );
};

export default InputField;

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

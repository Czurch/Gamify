import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface InputFieldProps {
  value: string;
}

const InputField: React.FC<InputFieldProps> = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
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
});

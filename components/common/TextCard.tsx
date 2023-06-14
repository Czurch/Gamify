import React, { Children, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
interface TextCardProps {
  innerText: string;
}

const TextCard: React.FC<TextCardProps> = ({ innerText }) => {
  return (
    <View style={styles.container}>
      <Shadow distance={3} style={{ width: "100%" }}>
        <View style={styles.card}>
          <Text style={styles.innerText}>{innerText}</Text>
        </View>
      </Shadow>
    </View>
  );
};

export default TextCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "transparent",
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 16,
    marginTop: 16,
  },
  card: {
    width: "100%",
    height: 64,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  innerText: {
    fontSize: 16,
  },
});

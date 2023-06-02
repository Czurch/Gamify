import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface ScreenHeaderBtnProps {
  text: string;
  dimension?: string;
  handlePress?: () => void;
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({
  text,
  dimension,
  handlePress,
}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;

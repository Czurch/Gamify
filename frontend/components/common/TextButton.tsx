import React from "react";
import { Pressable, Text, View } from "react-native";
import PlusIcon from "../../assets/img/plus.svg";

interface TextButtonProps {
  text: string;
  onPress: () => void;
}

const TextButton: React.FC<TextButtonProps> = ({ text, onPress }) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Pressable
        style={({ pressed }) => [
          {
            width: "60%",
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: pressed ? "#92EF9D" : "#70EB7E",
            borderRadius: 12,
          },
        ]}
        onPress={onPress}
      >
        <Text>{text}</Text>
      </Pressable>
    </View>
  );
};

export default TextButton;

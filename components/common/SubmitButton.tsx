import React from "react";
import { Pressable, Text, View } from "react-native";

interface SubmitButtonProps {
  text?: string;
  onPress: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, onPress }) => {
  return (
    <View
      style={{
        width: "100%",
        marginTop: 16,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Pressable
        style={({ pressed }) => [
          {
            width: "100%",
            height: 48,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: pressed ? "#92EF9D" : "#70EB7E",
            borderRadius: 12,
          },
        ]}
        onPress={onPress}
      >
        <Text style={{ color: "white" }}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default SubmitButton;

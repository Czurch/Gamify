import React from "react";
import { Pressable, View } from "react-native";
import PlusIcon from "../../assets/img/plus.svg";

interface AddButtonProps {
  onPress: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onPress }) => {
  return (
    <View
      style={{
        marginBottom: 100,
        justifyContent: "center",
        alignItems: "center",
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
        <PlusIcon />
      </Pressable>
    </View>
  );
};

export default AddButton;

import React, { Children } from "react";
import { Pressable, StyleSheet, View } from "react-native";

interface NavButtonProps {
  text?: string;
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  onPress: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ text, children, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.navButton,
          {
            backgroundColor: pressed
              ? "rgb(231, 228, 251)"
              : "rgb(247, 246, 254)",
          },
        ]}
        onPress={onPress}
      >
        {children}
      </Pressable>
    </View>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  navButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    backgroundColor: "#F7F6FE",
    borderRadius: 12,
  },
});

import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
interface NavBarProps {
  text?: string;
}

const NavBar: React.FC<NavBarProps> = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Pressable style={styles.navButton}>
          <Text>zinc</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.navButton,
            {
              backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
            },
          ]}
        >
          <Image source={require("../../assets/img/route.svg")}></Image>
        </Pressable>
        <Pressable style={styles.navButton}>
          <Text>wink</Text>
        </Pressable>
        <Pressable style={styles.navButton}>
          <Text>dink</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 16,
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
  },
  navButton: {
    flexGrow: 1,
    backgroundColor: "grey",
  },
});

import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import RouteLogo from "../../assets/img/route.svg";
import CompassLogo from "../../assets/img/compass.svg";
import UserLogo from "../../assets/img/user.svg";
import NavButton from "./NavButton";
import { useRouter } from "expo-router";
import { Shadow } from "react-native-shadow-2";
import { LinearGradient } from "expo-linear-gradient";

interface NavBarProps {
  text?: string;
}

const NavBar: React.FC<NavBarProps> = ({ text }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["transparent", "rgb(247,246,254)"]}
        style={styles.background}
      />
      <Shadow distance={3}>
        <View style={styles.navBar}>
          <NavButton onPress={() => router.replace(`/profile`)}>
            <UserLogo width={48} height={48} />
          </NavButton>
          <NavButton onPress={() => router.replace(`/`)}>
            <RouteLogo />
          </NavButton>
          <NavButton onPress={() => router.replace(`/explore`)}>
            <CompassLogo />
          </NavButton>
        </View>
      </Shadow>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "transparent",
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 16,
  },
  background: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  navBar: {
    height: 68,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F6FE",
    borderRadius: 12,
  },
});

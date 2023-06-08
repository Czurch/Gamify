import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SvgXml } from "react-native-svg";
import RouteLogo from "../../assets/img/route.svg";
import CompassLogo from "../../assets/img/compass.svg";
import UserLogo from "../../assets/img/user.svg";
import NavButton from "./NavButton";
import { useRouter } from "expo-router";

interface NavBarProps {
  text?: string;
}

const NavBar: React.FC<NavBarProps> = ({ text }) => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <NavButton onPress={() => router.push(`/profile`)}>
          <UserLogo width={48} height={48} />
        </NavButton>
        <NavButton onPress={() => router.push(`/`)}>
          <RouteLogo />
        </NavButton>
        <NavButton onPress={() => router.push(`/explore`)}>
          <CompassLogo />
        </NavButton>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 16,
  },
  navBar: {
    height: 68,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7F6FE",
    borderRadius: 12,
  },
});

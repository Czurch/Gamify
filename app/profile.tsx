import React from "react";
import { Bar } from "react-native-progress";
import {
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { demoProfile } from "../assets/data/demoprofile";
import demoQuests from "../assets/data/demoQuests";
import DividerLine from "../components/common/DividerLine";
import NavBar from "../components/common/NavBar";
import QuestCard from "../components/cards/QuestCard";

const ProfilePage: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#F7F6FE", paddingTop: 32 }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.content}>
        <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
          <Image
            source={require("../assets/img/chestMarker_128.png")}
            style={{ width: 96, height: 96, borderRadius: 12 }}
          />

          <Text style={styles.welcome}>Welcome, </Text>
          <Text style={styles.name}>{`${demoProfile.firstname}.`}</Text>
        </View>

        <Text style={styles.tagline}>Your journey Awaits.</Text>
        <Text style={styles.level}>{`Level ${demoProfile.level} `}</Text>
        <Bar
          progress={demoProfile.experience / 500}
          width={null}
          borderRadius={0}
          color="rgba(250, 220, 0, 1)"
        />
        <Text style={styles.experience}>{`${demoProfile.experience}/500`}</Text>
        <ScrollView>
          <Text style={styles.header}>Pinned Achievements</Text>
          <View style={{ padding: 16, alignItems: "center" }}>
            <Text>It looks like you don't have any achievements</Text>
          </View>
          <DividerLine />
          <Text style={styles.header}>Photos</Text>
          <View style={{ padding: 16, alignItems: "center" }}>
            <Text>It looks like you don't have any photos</Text>
          </View>
          <DividerLine />
        </ScrollView>
      </View>
      <NavBar />
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  questlist: {
    display: "flex",
    flexDirection: "column",
  },
  welcome: {
    fontSize: 30,
    fontWeight: "200",
  },
  name: {
    fontSize: 30,
    fontWeight: "300",
  },
  tagline: {
    fontSize: 20,
    fontWeight: "200",
  },
  level: {
    fontSize: 18,
  },
  experience: {
    alignSelf: "flex-end",
    fontWeight: "500",
  },
  header: {
    fontSize: 20,
    padding: 16,
  },
});

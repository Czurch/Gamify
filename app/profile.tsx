import React from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { Bar } from "react-native-progress";
import { Stack, useRouter } from "expo-router";
import NavBar from "../components/common/NavBar";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import { demoProfile } from "../assets/data/demoprofile";
import QuestCard from "../components/common/QuestCard";
import demoQuests from "../assets/data/demoQuests";

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
          <View style={styles.questlist}>
            {demoQuests.map((quest, ix) => {
              return (
                <QuestCard
                  key={ix}
                  title={quest.title}
                  experience={quest.reward}
                  description={quest.description}
                />
              );
            })}
          </View>
          {/* Design quest card components to put here.  */}
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
});

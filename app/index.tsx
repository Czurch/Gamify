import React from "react";
import { Bar } from "react-native-progress";
import { ScrollView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Stack, useRouter } from "expo-router";
import { demoProfile } from "../assets/data/demoprofile";
import demoQuests from "../assets/data/demoQuests";
import DividerLine from "../components/common/DividerLine";
import NavBar from "../components/common/NavBar";
import QuestCard from "../components/common/QuestCard";
import TextCard from "../components/common/TextCard";

const Home: React.FC = () => {
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
          <Text style={styles.header}>Daily Quest</Text>
          <QuestCard
            title="I Want to Ride my Bike"
            description="Take a bike ride! Bike for 1 km today."
            experience={100}
          />
          <DividerLine />
          <Text style={styles.header}>Active Quests</Text>
          <TextCard innerText="You don't have any active quests right now." />
          <DividerLine />
          <Text style={styles.header}>Available Quests</Text>
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
          <DividerLine />
        </ScrollView>
      </View>
      <NavBar />
    </SafeAreaView>
  );
};

export default Home;

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

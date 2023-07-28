import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Profile, QuestList } from "../constants/interfaces";
import { Bar } from "react-native-progress";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { Stack } from "expo-router";
import demoQuests from "../assets/data/demoQuests";
import DividerLine from "../components/common/DividerLine";
import NavBar from "../components/common/NavBar";
import QuestCard from "../components/cards/QuestCard";
import TextCard from "../components/cards/TextCard";
import nearbyQuestSlice from "../store/reducers/nearbyQuestReducer";
import { Quest } from "../constants/interfaces";

const Home: React.FC = () => {
  const userProfile: Profile = useSelector(
    (state: { user: Profile }) => state.user
  );
  const nearbyQuests: Quest[] = useSelector(
    (state: { nearbyQuests: QuestList }) => state.nearbyQuests.quests
  );
  const dispatch = useDispatch();
  const { replaceList } = nearbyQuestSlice.actions;
  const fetchNearbyQuests = () => {
    dispatch(replaceList(demoQuests));
  };

  useEffect(() => {
    fetchNearbyQuests();
  }, []);

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
          <Text style={styles.name}>{`${userProfile.firstname}.`}</Text>
        </View>

        <Text style={styles.tagline}>Your journey Awaits.</Text>
        <Text style={styles.level}>{`Level ${userProfile.level} `}</Text>
        <Bar
          progress={userProfile.experience / 500}
          width={null}
          borderRadius={0}
          color="rgba(250, 220, 0, 1)"
        />
        <Text style={styles.experience}>{`${userProfile.experience}/500`}</Text>
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
            {nearbyQuests.map((quest, ix) => {
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

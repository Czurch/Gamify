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
import { useRouter } from "expo-router";
import QuestCard from "../components/cards/QuestCard";
import TextCard from "../components/cards/TextCard";
import nearbyQuestSlice from "../store/reducers/nearbyQuestReducer";
import { Quest } from "../constants/interfaces";
import TextButton from "../components/common/TextButton";
import Authentication from "./authentication";

const Home: React.FC = () => {
  const userAuth = useSelector((state: { auth }) => state.auth);

  useEffect(() => {
    console.log(`useEffect in index: ${userAuth}`);
  }, [userAuth]);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#F7F6FE", paddingTop: 32 }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View>{!userAuth.token ? <Authentication /> : <Home />}</View>
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

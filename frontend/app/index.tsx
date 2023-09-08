import React, { useEffect, useState } from "react";
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
import Login from "./login";
import Home from "./home";

const Index: React.FC = () => {
  const userAuth = useSelector((state: { auth }) => state.auth);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#F7F6FE", paddingTop: 32 }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      {!userAuth.token ? <Login /> : <Home />}
    </SafeAreaView>
  );
};

export default Index;

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

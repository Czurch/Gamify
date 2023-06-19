import React, { useState } from "react";
import { ScrollView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { demoProfile } from "../assets/data/demoprofile";
import DividerLine from "../components/common/DividerLine";
import NavBar from "../components/common/NavBar";
import TextCard from "../components/cards/TextCard";
import AddButton from "../components/common/AddButton";
import AppModal from "../components/common/AppModal";
import NumberWheelPicker from "../components/common/NumberWheelPicker";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import InputField from "../components/common/InputField";
import { Pressable } from "react-native";
import EnumField from "../components/common/EnumField";
import SubmitButton from "../components/common/SubmitButton";
import { Goal } from "../constants/interfaces";

const Goals: React.FC = () => {
  const activities = [
    { label: "Bike", value: "bike" },
    { label: "Skateboard", value: "skateboard" },
    { label: "Run", value: "run" },
  ];
  const timeInterval = [
    { label: "minutes", value: "minutes" },
    { label: "hours", value: "hours" },
    { label: "times", value: "times" },
  ];
  const timePeriod = [
    { label: "day", value: "day" },
    { label: "week", value: "week" },
    { label: "month", value: "month" },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [activity, setActivity] = useState("Bike");
  const [value, setValue] = useState("0");
  const [interval, setInterval] = useState("minutes");
  const [period, setPeriod] = useState("day");
  const [dismiss, setDismiss] = useState(true);
  const openModal = () => {
    setModalVisible(true);
  };

  const createNewGoal = () => {
    const goal: Goal = {
      task: activity,
      value: Number(value),
      time: interval,
      interval: period,
    };
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#F7F6FE", paddingTop: 32 }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <AppModal
        visible={modalVisible}
        onVisibleChange={(newValue: boolean) => setModalVisible(newValue)}
        dismissChildren={() => setDismiss(!dismiss)}
      >
        <Text style={{ padding: 16 }}>I would like to</Text>
        <EnumField
          value={activity}
          setValue={({ item }) => setActivity(item.label)}
          items={activities}
          dismissFocus={dismiss}
        />
        <Text style={{ padding: 16 }}>for</Text>
        <View style={styles.row}>
          <InputField
            value={value}
            setValue={({ item }) => setValue(item.label)}
            dismissFocus={dismiss}
          />
          <EnumField
            value={interval}
            setValue={({ item }) => setInterval(item.label)}
            items={timeInterval}
            dismissFocus={dismiss}
          />
        </View>
        <Text style={{ padding: 16 }}>per</Text>
        <EnumField
          value={period}
          setValue={({ item }) => setPeriod(item.label)}
          items={timePeriod}
          dismissFocus={dismiss}
        />
        <SubmitButton text="Create Goal" onPress={() => createNewGoal()} />
      </AppModal>
      <View style={styles.content}>
        <Text style={styles.header}>My Goals</Text>
        <ScrollView>
          <TextCard innerText="You dont have any goals set." />
        </ScrollView>
        <DividerLine />
        <AddButton onPress={openModal} />
      </View>
      <NavBar />
    </SafeAreaView>
  );
};

export default Goals;

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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

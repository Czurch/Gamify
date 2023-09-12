import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import DividerLine from "../components/common/DividerLine";
import NavBar from "../components/common/NavBar";
import TextCard from "../components/cards/TextCard";
import AddButton from "../components/common/AddButton";
import AppModal from "../components/common/AppModal";
import InputField from "../components/common/InputField";
import { Pressable } from "react-native";
import EnumField from "../components/common/EnumField";
import SubmitButton from "../components/common/SubmitButton";
import { Goal, Profile } from "../constants/interfaces";
import profileSlice from "../store/reducers/profileReducer";

const Goals: React.FC = () => {
  const goals = useSelector((state: { user: Profile }) => state.user.goals);
  const dispatch = useDispatch();
  const { addGoal } = profileSlice.actions;

  const activities = [
    { label: "Bike", value: "bike" },
    { label: "Skateboard", value: "skateboard" },
    { label: "Run", value: "run" },
  ];
  const timeValue = [
    { label: "minutes", value: "minutes" },
    { label: "hours", value: "hours" },
    { label: "times", value: "times" },
  ];
  const timeInterval = [
    { label: "day", value: "day" },
    { label: "week", value: "week" },
    { label: "month", value: "month" },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState("Bike");
  const [value, setValue] = useState("0");
  const [time, setTime] = useState("minutes");
  const [interval, setInterval] = useState("day");
  const [dismiss, setDismiss] = useState(true);
  const openModal = () => {
    setModalVisible(true);
  };

  const createNewGoal = () => {
    setDismiss(true);
    setModalVisible(false);
    const goal: Goal = {
      task: task,
      value: Number(value),
      time: time,
      interval: interval,
    };
    dispatch(addGoal(goal));
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
          value={task}
          setValue={({ item }) => setTask(item.label)}
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
            value={time}
            setValue={({ item }) => setTime(item.label)}
            items={timeValue}
            dismissFocus={dismiss}
          />
        </View>
        <Text style={{ padding: 16 }}>per</Text>
        <EnumField
          value={interval}
          setValue={({ item }) => setInterval(item.label)}
          items={timeInterval}
          dismissFocus={dismiss}
        />
        <SubmitButton text="Create Goal" onPress={() => createNewGoal()} />
      </AppModal>
      <View style={styles.content}>
        <Text style={styles.header}>My Goals</Text>
        <ScrollView>
          {goals.length === 0 ? (
            <TextCard innerText="You dont have any goals set." />
          ) : (
            goals.map((goal, ix) => {
              return (
                <TextCard
                  innerText={`${goal.task} ${goal.value} ${goal.time} every ${goal.interval}`}
                  key={ix}
                />
              );
            })
          )}
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

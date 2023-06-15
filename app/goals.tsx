import React, { useState } from "react";
import { ScrollView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import { demoProfile } from "../assets/data/demoprofile";
import DividerLine from "../components/common/DividerLine";
import NavBar from "../components/common/NavBar";
import TextCard from "../components/common/TextCard";
import AddButton from "../components/common/AddButton";
import AppModal from "../components/common/AppModal";
import NumberWheelPicker from "../components/common/NumberWheelPicker";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import InputField from "../components/common/InputField";

const Goals: React.FC = () => {
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
  const [activity, setActivity] = useState(null);
  const [value, setValue] = useState(0);
  const [interval, setInterval] = useState("minutes");
  const [period, setPeriod] = useState("day");
  const openModal = () => {
    setModalVisible(true);
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
      >
        <Text>I would like to</Text>
        <InputField value="Bike" />
        <Text>for</Text>
        <View style={styles.row}>
          <NumberWheelPicker
            minValue={1}
            maxValue={10}
            onSetValue={({ item }) => setValue(item.label)}
          />
          <WheelPickerExpo
            onChange={({ item }) => setInterval(item.label)}
            items={timeInterval}
            backgroundColor="#F7F6FE"
          />
        </View>
        <Text>per</Text>
        <WheelPickerExpo
          onChange={({ item }) => setPeriod(item.label)}
          items={timePeriod}
        />
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

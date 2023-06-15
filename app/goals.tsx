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

const Goals: React.FC = () => {
  const CITIES = "Jakarta,Bandung,Sumbawa,Taliwang,Lombok,Bima".split(",");
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(0);
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
        <Text>Here's the content of the modal</Text>
        <NumberWheelPicker
          minValue={1}
          maxValue={10}
          onSetValue={({ item }) => setValue(item.label)}
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
});

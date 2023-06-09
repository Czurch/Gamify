import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import NavBar from "../components/common/NavBar";

const Home: React.FC = () => {
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
      <ScrollView>
        <View>
          <Text>Hoopla</Text>
          <Text>This Shit busting for real on god.</Text>
        </View>
        {/* Design quest card components to put here.  */}
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
};

export default Home;

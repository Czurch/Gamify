import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";

const Home: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "#25459F" },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn text="Back" dimension="60%" />,
          headerRight: () => (
            <ScreenHeaderBtn
              text="Forward"
              dimension="100%"
              handlePress={() => {
                router.push(`/profile`);
              }}
            />
          ),
          headerTitle: "",
        }}
      />
      <Text>This Shit busting for real on god.</Text>
    </SafeAreaView>
  );
};

export default Home;

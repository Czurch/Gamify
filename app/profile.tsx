import React from "react";
import { View, Text, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import { Bar } from "react-native-progress";
import { Stack, useRouter } from "expo-router";
import NavBar from "../components/common/NavBar";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import { demoProfile } from "../assets/data/demoprofile";

const ProfilePage: React.FC = () => {
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
                router.back();
              }}
            />
          ),
          headerTitle: "",
        }}
      />
      <View style={styles.content}>
        <Text>{`Welcome, ${demoProfile.firstname}. Your journey Awaits.`}</Text>
        <Text>{`Level ${demoProfile.level}. `}</Text>
        <Bar
          progress={demoProfile.experience / 500}
          width={null}
          borderRadius={0}
          color="rgba(250, 220, 0, 1)"
        />
        <Text
          style={{ alignSelf: "flex-end" }}
        >{`${demoProfile.experience}/500`}</Text>
        <ScrollView>
          <View style={styles.questlist}>
            <Text>Hoopla</Text>
          </View>
          {/* Design quest card components to put here.  */}
        </ScrollView>
      </View>
      <NavBar />
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  questlist: {
    display: "flex",
    flexDirection: "column",
    margin: 16,
  },
});

import React, { Children, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { LinearGradient } from "expo-linear-gradient";
import { Quest } from "../../constants/interfaces";
import TextButton from "../common/TextButton";

interface QuestCardProps {
  quest?: Quest;
  title: string;
  experience: number;
  description: string;
  onPress?: () => void;
}

const QuestCard: React.FC<QuestCardProps> = ({
  quest,
  title,
  experience,
  description,
  onPress,
}) => {
  const [backgroundColor, setBackground] = useState("rgba(231,228,251,1.0)");
  const highlightCard = ({ pressed }) => {
    setBackground(pressed ? "rgba(251,231,228,1.0)" : "rgba(231,228,251,1.0)");
  };

  return (
    <View style={styles.container}>
      <Shadow distance={3}>
        <Pressable style={styles.card}>
          <LinearGradient
            colors={[backgroundColor, "transparent"]}
            style={styles.background}
          />
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.xp}>{experience}xp</Text>
            </View>
            <View style={styles.body}>
              <Text>{description}</Text>
            </View>
          </View>
          <TextButton
            text="Accept Quest"
            onPress={() => console.log("AHHHH OH GOD, IT HURTS! GOOD GOD!")}
          />
        </Pressable>
      </Shadow>
    </View>
  );
};

export default QuestCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "transparent",
    paddingRight: 16,
    paddingLeft: 16,
    marginBottom: 16,
    marginTop: 16,
  },
  card: {
    width: "100%",
    height: 185,
    display: "flex",
    borderRadius: 12,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  content: {
    width: "100%",
    flex: 1,
    padding: 16,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  body: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  xp: {
    fontSize: 12,
  },
  description: {
    fontSize: 14,
    textAlign: "left",
  },
});

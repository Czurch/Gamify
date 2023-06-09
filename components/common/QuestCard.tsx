import React, { Children } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { LinearGradient } from "expo-linear-gradient";

interface QuestCardProps {
  text?: string;
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  onPress?: () => void;
}

const QuestCard: React.FC<QuestCardProps> = ({ text, children, onPress }) => {
  return (
    <View style={styles.container}>
      <Shadow distance={3}>
        <Pressable style={styles.card}>
          <LinearGradient
            colors={["rgba(231,228,251,1.0)", "transparent"]}
            style={styles.background}
          />
          <View style={styles.content}>
            <View style={styles.header}>
              <Text style={styles.title}>Quest Title</Text>
              <Text style={styles.xp}>50xp</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.description}>
                Quest Description would go in this section and it would be like
                super cool actually. Like no joke I think this would be a great
                spot for some sort of text.
              </Text>
            </View>
          </View>
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
    alignItems: "center",
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

import React from "react";
import { StyleSheet, View } from "react-native";

interface QuestCardContentProps {
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
}

const QuestCardContent: React.FC<QuestCardContentProps> = ({ children }) => {
  return <View style={styles.content}>{children}</View>;
};

const styles = StyleSheet.create({
  content: {
    width: "100%",
    flex: 1,
    padding: 16,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
  },
});
export default QuestCardContent;

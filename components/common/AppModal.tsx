import React, { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";

interface AppModalProps {
  text?: string;
  visible: boolean;
  onVisibleChange: (newValue: boolean) => void;
}

const AppModal: React.FC<AppModalProps> = ({
  text,
  visible,
  onVisibleChange,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          onVisibleChange(!visible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{text}</Text>
            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => onVisibleChange(!visible)}
              title="Hide Modal"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default AppModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 320,
    height: 256,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

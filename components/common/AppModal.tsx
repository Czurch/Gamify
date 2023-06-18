import React, { useState } from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import CloseIcon from "../../assets/img/close.svg";

interface AppModalProps {
  text?: string;
  visible: boolean;
  onVisibleChange: (newValue: boolean) => void;
  children?: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  dismissChildren: () => void;
}

const AppModal: React.FC<AppModalProps> = ({
  text,
  visible,
  onVisibleChange,
  children,
  dismissChildren,
}) => {
  const dismissInputFocus = () => {
    dismissChildren();
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onVisibleChange(!visible);
      }}
    >
      <View style={styles.centeredView}>
        <Pressable
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: "transparent",
          }}
          onPress={() => dismissInputFocus()}
        />
        <Pressable style={styles.modalView} onPress={() => dismissInputFocus()}>
          {children}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => onVisibleChange(!visible)}
          >
            <CloseIcon />
          </Pressable>
        </Pressable>
      </View>
    </Modal>
  );
};
export default AppModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "90%",
    minHeight: 256,
    maxHeight: "80%",
    backgroundColor: "rgba(231,228,251,1.0)",
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
    borderRadius: 12,
    padding: 10,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#EEEEEE",
    position: "absolute",
    top: 16,
    right: 16,
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

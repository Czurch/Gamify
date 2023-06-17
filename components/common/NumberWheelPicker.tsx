import React from "react";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { ItemType } from "react-native-wheel-picker-expo/lib/typescript/types";

interface NumberWheelPickerProps {
  minValue: number;
  maxValue: number;
  height?: number;
  onSetValue: (item: any) => void;
}

const NumberWheelPicker: React.FC<NumberWheelPickerProps> = ({
  minValue,
  maxValue,
  height,
  onSetValue,
}) => {
  const generateItemsInRange = () => {
    let list: Array<ItemType> = [];
    for (let i = minValue; i <= maxValue; i++) {
      list.push({ label: `${i}`, value: { i } });
    }
    return list;
  };
  return (
    <WheelPickerExpo
      initialSelectedIndex={3}
      items={generateItemsInRange()}
      onChange={onSetValue}
      height={height ? height : 150}
    />
  );
};

export default NumberWheelPicker;

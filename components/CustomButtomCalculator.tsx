import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import * as Haptics from 'expo-haptics';
import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
  label: string;
  variant: "number" | "operation" | "clear";
  blackText?: boolean;
  onPress?: () => void;
  dobleSize?: boolean
}

const CustomButtomCalculator = ({
  label,
  variant,
  onPress,
  blackText = false,
  dobleSize= false
}: Props) => {

  const buttonColor =
    variant === "number"
      ? Colors.darkGray
      : variant === "clear"
      ? Colors.lightGray
      : Colors.orange;

  return (
    <Pressable
      style={({pressed}) => ({
        ...globalStyles.buttom,
        width: dobleSize ? 180 : 80,
        backgroundColor: buttonColor,
        opacity: pressed ? 0.8 : 1,
      })}
      onPress={() => {
        Haptics.selectionAsync();
        onPress && onPress();
      }}
    >
      <Text
        style={[
          globalStyles.buttomText,
          { color: blackText ? "black" : "white" },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CustomButtomCalculator;

import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { Text, type TextProps } from "react-native";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}

export default function CustomText({ children, variant, ...rest }: Props) {
  return (
    <Text
      numberOfLines={1}
      adjustsFontSizeToFit
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" && globalStyles.mainResults,
        variant === "h2" && globalStyles.subResult,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

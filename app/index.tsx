import CustomButtomCalculator from "@/components/CustomButtomCalculator";
import CustomText from "@/components/CustomText";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View
        style={{
          paddingHorizontal: 30,
          marginBottom: 20,
        }}
      >
        <CustomText variant="h1">50 x 50</CustomText>
        <CustomText variant="h2">250</CustomText>
      </View>

      {/* Filas de botones */}

      <View style={globalStyles.row}>
        <CustomButtomCalculator variant="clear" blackText label="C" />
        <CustomButtomCalculator variant="clear" blackText label="+/-" />
        <CustomButtomCalculator variant="clear" blackText label="del" />
        <CustomButtomCalculator variant="operation" label="%" />
      </View>

      <View style={globalStyles.row}>
        <CustomButtomCalculator variant="number" label="1" />
        <CustomButtomCalculator variant="number" label="2" />
        <CustomButtomCalculator variant="number" label="3" />
        <CustomButtomCalculator variant="operation" label="X" />
      </View>

      <View style={globalStyles.row}>
        <CustomButtomCalculator variant="number" label="4" />
        <CustomButtomCalculator variant="number" label="5" />
        <CustomButtomCalculator variant="number" label="6" />
        <CustomButtomCalculator variant="operation" label="-" />
      </View>

      <View style={globalStyles.row}>
        <CustomButtomCalculator variant="number" label="7" />
        <CustomButtomCalculator variant="number" label="8" />
        <CustomButtomCalculator variant="number" label="9" />
        <CustomButtomCalculator variant="operation" label="+" />
      </View>
      <View style={globalStyles.row}>
        <CustomButtomCalculator variant="number" label="0" dobleSize />
        <CustomButtomCalculator variant="number" label="." />
        <CustomButtomCalculator variant="operation" label="=" />
      </View>
    </View>
  );
};

export default CalculatorApp;

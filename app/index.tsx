import CustomButtomCalculator from "@/components/CustomButtomCalculator";
import CustomText from "@/components/CustomText";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  const {
    formule,
    prevNumber,
    buildNumber,
    clear,
    toogleSign,
    deleteLastNum,
    divideOperation,
    multiplyOperation,
    sumOperation,
    subtractOperation,
    doneOperation
  } = useCalculator();

  return (
    <View style={globalStyles.calculatorContainer}>
      <View
        style={{
          paddingHorizontal: 30,
          marginBottom: 20,
        }}
      >
        <CustomText variant="h1">{formule}</CustomText>
        {formule === prevNumber ? (
          <CustomText variant="h2"> </CustomText>
        ) : (
          <CustomText variant="h2">{prevNumber}</CustomText>
        )}
      </View>

      {/* Filas de botones */}

      <View style={globalStyles.row}>
        <CustomButtomCalculator
          onPress={clear}
          variant="clear"
          blackText
          label="C"
        />
        <CustomButtomCalculator
          onPress={toogleSign}
          variant="clear"
          blackText
          label="+/-"
        />
        <CustomButtomCalculator
          onPress={deleteLastNum}
          variant="clear"
          blackText
          label="del"
        />
        <CustomButtomCalculator
          onPress={divideOperation}
          variant="operation"
          label="%"
        />
      </View>

      <View style={globalStyles.row}>
        <CustomButtomCalculator
          onPress={() => buildNumber("1")}
          variant="number"
          label="1"
        />
        <CustomButtomCalculator
          onPress={() => buildNumber("2")}
          variant="number"
          label="2"
        />
        b
        <CustomButtomCalculator
          onPress={() => buildNumber("3")}
          variant="number"
          label="3"
        />
        <CustomButtomCalculator
          onPress={multiplyOperation}
          variant="operation"
          label="X"
        />
      </View>

      <View style={globalStyles.row}>
        <CustomButtomCalculator
          onPress={() => buildNumber("4")}
          variant="number"
          label="4"
        />
        <CustomButtomCalculator
          onPress={() => buildNumber("5")}
          variant="number"
          label="5"
        />
        <CustomButtomCalculator
          onPress={() => buildNumber("6")}
          variant="number"
          label="6"
        />
        <CustomButtomCalculator
          onPress={subtractOperation}
          variant="operation"
          label="-"
        />
      </View>

      <View style={globalStyles.row}>
        <CustomButtomCalculator
          onPress={() => buildNumber("7")}
          variant="number"
          label="7"
        />
        <CustomButtomCalculator
          onPress={() => buildNumber("8")}
          variant="number"
          label="8"
        />
        <CustomButtomCalculator
          onPress={() => buildNumber("9")}
          variant="number"
          label="9"
        />
        <CustomButtomCalculator
          onPress={sumOperation}
          variant="operation"
          label="+"
        />
      </View>
      <View style={globalStyles.row}>
        <CustomButtomCalculator
          onPress={() => buildNumber("0")}
          variant="number"
          label="0"
          dobleSize
        />
        <CustomButtomCalculator
          onPress={() => buildNumber(".")}
          variant="number"
          label="."
        />
        <CustomButtomCalculator
          onPress={doneOperation}
          variant="operation"
          label="="
        />
      </View>
    </View>
  );
};

export default CalculatorApp;

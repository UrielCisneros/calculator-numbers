import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multy = "x",
  divide = "%",
}

export const useCalculator = () => {
  const [formule, setFormule] = useState("0");

  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");

  const lastOperation = useRef<Operator>(undefined);

  useEffect(() => {
    if(lastOperation.current){
        const firstFormulaPart = formule.split(' ').at(0);
        setFormule(`${firstFormulaPart} ${lastOperation.current} ${number}`)
    }else{
        setFormule(number);
    }
  }, [number])
  

  useEffect(() => {
    //Todo: calculate result
    const subResult = calculateResult();
    setPrevNumber(`${subResult}`);
  }, [formule]);

  const buildNumber = (numberString: string) => {
    //verificar que ya existe el decimal
    if (number.includes(".") && numberString === ".") return;
    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") return setNumber(number + numberString);
      if (numberString === "0" && number.includes("."))
        return setNumber(number + numberString);
      if (numberString !== "0" && !number.includes("."))
        return setNumber(numberString);
      if (numberString === "0" && !number.includes(".")) return;
    }
    setNumber(number + numberString);
  };

  const clear = () => {
    setFormule("0");
    setNumber("0");
    setPrevNumber("0");
    lastOperation.current = undefined;
  };

  const toogleSign = () => {
    if (number === "0") return;
    if (number.includes("-")) return setNumber(number.replace("-", ""));
    return setNumber("-" + number);
  };

  const deleteLastNum = () => {
    let newNum = number.slice(0, -1);
    if (newNum.includes("-") && newNum.length === 1) newNum = "";
    return setNumber(newNum === "" ? "0" : newNum);
  };

  const setLastNumber = () => {
    if (number.endsWith(".")) setPrevNumber(number.slice(0, -1));
    setPrevNumber(number);
    setNumber("0");
  };

  const divideOperation = () => {
    lastOperation.current = Operator.divide;
    setLastNumber();
  };
  const multiplyOperation = () => {
    lastOperation.current = Operator.multy;
    setLastNumber();
  };

  const sumOperation = () => {
    lastOperation.current = Operator.add;
    setLastNumber();
  };

  const subtractOperation = () => {
    lastOperation.current = Operator.subtract;
    setLastNumber();
  };

  const calculateResult = () => {
    const [firstNumVal, operation, secondNumVal] = formule.split(' ');
    const num1 = Number(firstNumVal);
    const num2 = Number(secondNumVal);
    if(isNaN(num2)) return num1

    switch(operation){
        case Operator.add:
            return num1 + num2;
        case Operator.divide:
            return num1 / num2;
        case Operator.multy:
            return num1 * num2;
        case Operator.subtract:
            return num1 - num2;
        default:
            return 0;
    }
  }

  const doneOperation = () => {
    // setNumber(toString(calculateResult()))
  }

  return {
    //Props
    formule,
    number,
    prevNumber,
    lastOperation,
    //Methods
    buildNumber,
    clear,
    toogleSign,
    deleteLastNum,
    divideOperation,    
    multiplyOperation,
    sumOperation,
    subtractOperation,
    doneOperation
  };
};

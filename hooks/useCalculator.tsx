import { useEffect, useRef, useState } from "react";

enum Operator {
    add = '+',
    subtract = '-',
    multy = '*',
    divide = '%'
}

export const useCalculator = () => {

    const [formule, setFormule] = useState('0');

    const [number, setNumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>(Operator.add);

    useEffect(() => {
      //Todo: calculate result
      setFormule(number);
    }, [number])
    


    const buildNumber = (numberString: string) => {
        //verificar que ya existe el decimal
        if(number.includes('.') && numberString === '.') return;
        if(number.startsWith("0") || number.startsWith("-0")){
            if(numberString === '.')return setNumber(number + numberString);
            if(numberString === '0' && number.includes('.')) return setNumber(number + numberString);
            if(numberString !== '0' && !number.includes('.')) return setNumber(numberString);
            if(numberString === '0' && !number.includes('.')) return;
        }

        setNumber(number + numberString)
    }


    return {
        //Props
        formule,
        number,
        prevNumber,
        //Methods
        buildNumber
    }

}
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

    const lastOperation = useRef<Operator>(undefined);

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

    const clear = () => {
        setFormule('0');
        setNumber('0');
        setPrevNumber('0');
        lastOperation.current = undefined;
    }

    const toogleSign = () => {
        if(number === '0') return;
        if(number.includes('-'))return setNumber(number.replace('-',""));
        return setNumber("-" + number);
    }

    const deleteLastNum = () => {
        let newNum =  number.slice(0 ,-1);
        if(newNum.includes('-') && newNum.length === 1) newNum = '';
        return setNumber(newNum === '' ? '0' : newNum);
    }


    return {
        //Props
        formule,
        number,
        prevNumber,
        //Methods
        buildNumber,
        clear,
        toogleSign,
        deleteLastNum
    }

}
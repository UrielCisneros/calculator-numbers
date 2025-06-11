import { useRef, useState } from "react";

enum Operator {
    add = '+',
    subtract = '-',
    multy = '*',
    divide = '%'
}

export const useCalculator = () => {

    const [formule, setFormule] = useState();

    const [number, setnumber] = useState('0');
    const [prevNumber, setPrevNumber] = useState('0');

    const lastOperation = useRef<Operator>(Operator.add);


    const buildNumber = (numberStirng: String) => {
        console.log(numberStirng)
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
import React, { useEffect, useState } from 'react';
import ".//Calculator.css"

function Calculator() {

    const [calculate, setCalculate] = useState("");
    const [result, setResult] = useState("");
    const oparetor = ["/", "*", "-", "+"];

    useEffect(() => {
        document.title=`Calculator`
    });

    const updateResult = value => {
        if (
            oparetor.includes(value) && calculate === "" ||
            oparetor.includes(value) && oparetor.includes(calculate.slice(-1)
            )
        ) {
            return;
        }
        setCalculate(calculate + value);
        if(!oparetor.includes(value)){
            setResult(eval(calculate + value).toString());
        }
    }

    const creatDigits = () => {
        const digits = [];
        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateResult(i.toString())} key={i}>{i}</button>
            )
        }
        return digits;
    }

    const equalsTo = () => {
        setCalculate(eval(calculate).toString())
    }

    const deleted = () => {
        if(calculate === ""){
            return;
        }
        const value = calculate.slice(0, -1);
        setCalculate(value);
    }
    return (
        <div className='Apps'>
            <div className='calculator'>

                <div className="display">
                    {result ? <span></span> : ""}&nbsp; {calculate || ""}
                </div>

                <div className="operators">
                    <button onClick={() => updateResult("/")}>/</button>
                    <button onClick={() => updateResult("*")}>*</button>
                    <button onClick={() => updateResult("-")}>-</button>
                    <button onClick={() => updateResult("+")}>+</button>

                    <button onClick={deleted}>DEL</button>
                </div>

                <div className="digits">
                    {creatDigits()}
                    <button onClick={() => updateResult("0")}>0</button>
                    <button onClick={() => updateResult(".")}>.</button>
                    <button onClick={equalsTo}>=</button>
                </div>

            </div>
        </div>
    );
}

export default Calculator;
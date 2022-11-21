import React from "react";
import Button from "./button"

function CalculatorButtons (props) {
    const { numberClick, operatorClick, resetClick } = props;
    return (
        <div className="buttons">
            <div className="numbers">
                <Button className="numbers_button one" onClick={() => numberClick(1)} label="1"/>
                <Button className="numbers_button two" onClick={() => numberClick(2)} label="2"/>
                <Button className="numbers_button three" onClick={() => numberClick(3)} label="3"/>
                <Button className="numbers_button four" onClick={() => numberClick(4)} label="4"/>
                <Button className="numbers_button five" onClick={() => numberClick(5)} label="5"/>
                <Button  className="numbers_button six" onClick={() => numberClick(6)} label="6"/>
                <Button className="numbers_button seven" onClick={() => numberClick(7)} label="7"/>
                <Button className="numbers_button eight" onClick={() => numberClick(8)} label="8"/>
                <Button className="numbers_button nine" onClick={() => numberClick(9)} label="9"/>
                <Button className="numbers_button zero" onClick={() => numberClick(0)} label="0"/>
            </div>
            <div className="operations">
                <Button className="operations_button plus" onClick={() => operatorClick("plus")} label="+"/>
                <Button className="operations_button minus" onClick={() => operatorClick("minus")} label="-"/>
                <Button className="operations_button divide" onClick={() => operatorClick("divide")} label="&divide;"/>
                <Button className="operations_button multiply" onClick={() => operatorClick("multiply")} label="&times;"/>
                <Button className="operations_button equal" onClick={() => operatorClick("equal")} label="="/>
                <Button className="operations_button reset" onClick={resetClick} label="C"/>
            </div>
        </div>
    );
}

export default CalculatorButtons;
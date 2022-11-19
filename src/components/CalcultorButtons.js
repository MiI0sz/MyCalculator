import React from "react";
import Button from "./button"

function CalculatorButtons (props) {
    const { numberClick, operatorClick, resetClick } = props;
    return (
        <div className="buttons">
            <div className="numbers">
                <Button value="1" className="numbers_button one" onClick={numberClick} label="1"/>
                <Button value="2" className="numbers_button two" onClick={numberClick} label="2"/>
                <Button value="3" className="numbers_button three" onClick={numberClick} label="3"/>
                <Button value="4" className="numbers_button four" onClick={numberClick} label="4"/>
                <Button value="5" className="numbers_button five" onClick={numberClick} label="5"/>
                <Button value="6" className="numbers_button six" onClick={numberClick} label="6"/>
                <Button value="7" className="numbers_button seven" onClick={numberClick} label="7"/>
                <Button value="8" className="numbers_button eight" onClick={numberClick} label="8"/>
                <Button value="9" className="numbers_button nine" onClick={numberClick} label="9"/>
                <Button value="0" className="numbers_button zero" onClick={numberClick} label="0"/>
            </div>
            <div className="operations">
                <Button value="plus" className="operations_button plus" onClick={operatorClick} label="+"/>
                <Button value="minus" className="operations_button minus" onClick={operatorClick} label="-"/>
                <Button value="divide" className="operations_button divide" onClick={operatorClick} label="&divide;"/>
                <Button value="multiply" className="operations_button multiply" onClick={operatorClick} label="&times;"/>
                <Button value="equal" className="operations_button equal" onClick={operatorClick} label="="/>
                <Button value="C" className="operations_button reset" onClick={resetClick} label="C"/>
            </div>
        </div>
    );
}

export default CalculatorButtons;